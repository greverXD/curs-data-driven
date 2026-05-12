import prisma from '../../config/db'
import { CreateOrderDto } from './order.types'
import { Request, Response } from 'express'
// 🛒 Создание заказа
export const createOrder = async ( req: Request,userId: string,data: CreateOrderDto) => {
  const {
  customerName,
  phone,
  address,
  comment,
  paymentMethod
} = data
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

  variantId: variant.id,

  quantity: item.quantity,

  price: variant.price
})
  }

  // 🧾 создаём заказ
const order = await prisma.order.create({
data: {
  userId,

  customerName,
  phone,
  address,
  comment,
  paymentMethod,

  total,
    items: {
      create: itemsData
    }
  },
  include: {
    items: true
  }
})
await prisma.analyticsEvent.create({
  data: {
    type: 'ORDER_CREATED',
    userId,

    ipAddress:
      (req.headers['x-forwarded-for'] as string)?.split(',')[0] ||
      req.socket.remoteAddress ||
      null,

    userAgent: req.headers['user-agent']
  }
})
return order
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
export const getAllOrders = async (
  status?: string,
  page = 1,
  limit = 5
) => {
  const skip = (page - 1) * limit

  const where = status
    ? {
        status
      }
    : {}

  const orders = await prisma.order.findMany({
    where,

    skip,

    take: limit,

    include: {
      user: true,

      items: {
        include: {
          product: true,
          variant: true
        }
      }
    },

    orderBy: {
      createdAt: 'desc'
    }
  })

  const total = await prisma.order.count({
    where
  })

  return {
    orders,

    total,

    totalPages: Math.ceil(total / limit),

    currentPage: page
  }
}