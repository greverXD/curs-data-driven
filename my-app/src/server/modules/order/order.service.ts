import prisma from '../../config/db'
import { CreateOrderDto } from './order.types'

export const createOrder = async (userId: string, data: CreateOrderDto) => {
  let total = 0

  const itemsData = []

  for (const item of data.items) {
    const product = await prisma.product.findUnique({
      where: { id: item.productId }
    })

    if (!product) {
      throw new Error('Product not found')
    }

    const itemTotal = product.price * item.quantity
    total += itemTotal

    itemsData.push({
      productId: item.productId,
      quantity: item.quantity,
      price: product.price
    })
  }

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

export const getUserOrders = async (userId: string) => {
  return prisma.order.findMany({
    where: { userId },
    include: { items: true }
  })
}

export const getById = async (id: string) => {
  return prisma.order.findUnique({
    where: { id },
    include: { items: true }
  })
}