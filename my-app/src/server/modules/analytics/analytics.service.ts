import prisma from '../../config/db'

export const getDashboard = async () => {
  const now = new Date()

  const last7Days = new Date()
  last7Days.setDate(now.getDate() - 7)

  // 👀 посещения
  const visitsRaw = await prisma.analyticsEvent.groupBy({
    by: ['createdAt'],
    where: {
      type: 'PAGE_VIEW',
      createdAt: {
        gte: last7Days
      }
    },
    _count: true,
    orderBy: {
      createdAt: 'asc'
    }
  })

  const visits = visitsRaw.map(item => ({
    date: item.createdAt.toISOString().split('T')[0],
    count: item._count
  }))

  // 📦 заказы
  const ordersRaw = await prisma.order.groupBy({
    by: ['createdAt'],
    where: {
      createdAt: {
        gte: last7Days
      }
    },
    _count: true,
    _sum: {
      total: true
    },
    orderBy: {
      createdAt: 'asc'
    }
  })

  const orders = ordersRaw.map(item => ({
    date: item.createdAt.toISOString().split('T')[0],
    count: item._count,
    revenue: item._sum.total || 0
  }))

  // 👥 пользователи
  const usersRaw = await prisma.user.groupBy({
    by: ['createdAt'],
    where: {
      createdAt: {
        gte: last7Days
      }
    },
    _count: true,
    orderBy: {
      createdAt: 'asc'
    }
  })

  const users = usersRaw.map(item => ({
    date: item.createdAt.toISOString().split('T')[0],
    count: item._count
  }))

  // 📊 метрики
  const totalUsers = await prisma.user.count()

  const totalOrders = await prisma.order.count()

  const totalVisits = await prisma.analyticsEvent.count({
    where: {
      type: 'PAGE_VIEW'
    }
  })

  const revenue = await prisma.order.aggregate({
    _sum: {
      total: true
    }
  })

  // 🔥 топ товары
  const topProductsRaw = await prisma.orderItem.groupBy({
    by: ['productId'],
    _sum: {
      quantity: true
    },
    orderBy: {
      _sum: {
        quantity: 'desc'
      }
    },
    take: 5
  })

  const topProducts = await Promise.all(
    topProductsRaw.map(async item => {
      const product = await prisma.product.findUnique({
        where: {
          id: item.productId
        }
      })

      return {
        title: product?.title || 'Unknown',
        sold: item._sum.quantity || 0
      }
    })
  )

  // 🕓 последние заказы
  const recentOrders = await prisma.order.findMany({
    take: 5,
    orderBy: {
      createdAt: 'desc'
    },
    include: {
      user: true
    }
  })

  return {
    visits,
    orders,
    users,

    stats: {
      totalUsers,
      totalOrders,
      totalVisits,
      revenue: revenue._sum.total || 0
    },

    topProducts,

    recentOrders
  }
}