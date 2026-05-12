import prisma from '../../config/db'
import { Prisma } from '@prisma/client'
export const getAll = async () => {
  return prisma.product.findMany({
    include: {
      variants: true
    }
  })
}

export const getById = async (id: string) => {
  return prisma.product.findUnique({
    where: { id },
    include: {
      variants: true
    }
  })
}
export const getPopular = async () => {
  const topProducts =
    await prisma.orderItem.groupBy({
      by: ['productId'],

      _sum: {
        quantity: true
      },

      orderBy: {
        _sum: {
          quantity: 'desc'
        }
      },

      take: 8
    })

  return Promise.all(
    topProducts.map(async item => {
      return prisma.product.findUnique({
        where: {
          id: item.productId
        },

        include: {
          variants: true
        }
      })
    })
  )
}
export const getNew = async () => {
  return prisma.product.findMany({
    orderBy: {
      createdAt: 'desc'
    },

    take: 4,

    include: {
      variants: true
    }
  })
}
export const getSale = async () => {
  return prisma.product.findMany({
    where: {
      discountPercent: {
        gte: 20
      }
    },

    include: {
      variants: true
    }
  })
}
export const create = async (data: any) => {
  return prisma.product.create({
    data: {
      title: data.title,

      description: data.description,

      category: data.category,

      discountPercent:
        Number(data.discountPercent),

      variants: {
        create: data.variants.map(
          (variant: any) => ({
            size: variant.size,

            color: variant.color,

            price: Number(variant.price),

            stock: Number(variant.stock),

            image: variant.image
          })
        )
      }
    },

    include: {
      variants: true
    }
  })
}

export const update = async (id: string, data:Prisma.ProductUpdateInput) => {
  return prisma.product.update({
    where: { id },
    data
  })
}

export const remove = async (id: string) => {
  return prisma.product.delete({ where: { id } })
}