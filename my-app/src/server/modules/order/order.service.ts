import prisma from '../../config/db'
import { CreateOrderDto } from './order.types'

// 🛒 Создание заказа
export const createOrder = async (userId: string, data: CreateOrderDto) => {
  let total = 0

  const itemsData = []

  for (const item of data.items) {
    // 👇 ищем variant, а не product
    const variant = await prisma.variant.findUnique({
      where: { id: item.variantId }
    })

    if (!variant) {
      throw new Error('Variant not found')
    }

    const itemTotal = variant.price * item.quantity
    total += itemTotal

    itemsData.push({
      productId: variant.productId,
      quantity: item.quantity,
      price: variant.price
    })
  }

  // 🧾 создаём заказ
  return prisma.order.create({
    data: {
      userId,
      total,
      items: {
        create: itemsData
      }
    },
    include: {
      items: true
    }
  })
}

// 📦 Заказы пользователя
export const getUserOrders = async (userId: string) => {
  return prisma.order.findMany({
    where: { userId },
    include: {
      items: {
        include: {
          product: true // 👈 чтобы фронт знал что это за товар
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
}

// 📄 Один заказ
export const getById = async (id: string, userId: string) => {
  const order = await prisma.order.findUnique({
    where: { id },
    include: {
      items: {
        include: {
          product: true
        }
      }
    }
  })

  // 🔒 защита (очень важно)
  if (!order || order.userId !== userId) {
    throw new Error('Order not found or access denied')
  }

  return order
}