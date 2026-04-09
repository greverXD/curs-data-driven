import prisma from '../../config/db'

export const getAll = () => prisma.client.findMany()

export const getById = (id: string) =>
  prisma.client.findUnique({ where: { id } })

export const create = (data) =>
  prisma.client.create({ data })

export const update = (id: string, data) =>
  prisma.client.update({ where: { id }, data })

export const remove = (id: string) =>
  prisma.client.delete({ where: { id } })