import prisma from '../../config/db'

export const getAll = () => prisma.user.findMany()

export const getById = (id: string) =>
  prisma.user.findUnique({ where: { id } })

export const create = (data: any) =>
  prisma.user.create({ data })

export const update = (id: string, data: any) =>
  prisma.user.update({ where: { id }, data })

export const remove = (id: string) =>
  prisma.user.delete({ where: { id } })