import { Request, Response } from 'express'
import * as productService from './product.service'

export const getAll = async (req: Request, res: Response) => {
  const products = await productService.getAll()
  res.json(products)
}

export const getById = async (req: any, res: Response) => {
  const product = await productService.getById(req.params.id)
  res.json(product)
}

export const create = async (req: Request, res: Response) => {
  const product = await productService.create(req.body)
  res.json(product)
}
export const getPopular = async (
  req: Request,
  res: Response
) => {
  const products =
    await productService.getPopular()

  res.json(products)
}
export const getNew = async (
  req: Request,
  res: Response
) => {
  const products =
    await productService.getNew()

  res.json(products)
}
export const getSale = async (
  req: Request,
  res: Response
) => {
  const products =
    await productService.getSale()

  res.json(products)
}
export const update = async (req: any, res: Response) => {
  const product = await productService.update(req.params.id, req.body)
  res.json(product)
}

export const remove = async (req: any, res: Response) => {
  await productService.remove(req.params.id)
  res.json({ success: true })
}