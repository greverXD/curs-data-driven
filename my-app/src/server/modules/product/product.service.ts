import prisma from '../../config/db'

export const getAll = async () => {
  return prisma.product.findMany()
}

export const getById = async (id: string) => {
  return prisma.product.findUnique({ where: { id } })
}

export const create = async (data) => {
  return prisma.product.create({ data })
}

export const update = async (id: string, data) => {
  return prisma.product.update({
    where: { id },
    data
  })
}

export const remove = async (id: string) => {
  return prisma.product.delete({ where: { id } })
}