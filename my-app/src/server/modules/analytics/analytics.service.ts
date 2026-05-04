import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

export const getDashboard = async () => {
  const now = new Date()
  const last7Days = new Date()
  last7Days.setDate(now.getDate() - 7)

  // 📈 посещения
  const visits = await prisma.analyticsEvent.groupBy({
    by: ['createdAt'],
    where: {
      type: 'PAGE_VIEW',
      createdAt: { gte: last7Days }
    },
    _count: true
  })

  // 📦 заказы по дням
  const orders = await prisma.order.groupBy({
    by: ['createdAt'],
    where: {
      createdAt: { gte: last7Days }
    },
    _count: true,
    _sum: { total: true }
  })

  // 👥 пользователи
  const users = await prisma.user.groupBy({
    by: ['createdAt'],
    where: {
      createdAt: { gte: last7Days }
    },
    _count: true
  })

  // 📊 метрики
  const totalUsers = await prisma.user.count()
  const totalOrders = await prisma.order.count()
  const revenue = await prisma.order.aggregate({
    _sum: { total: true }
  })

  return {
    visits,
    orders,
    users,
    stats: {
      totalUsers,
      totalOrders,
      revenue: revenue._sum.total || 0
    }
  }
}