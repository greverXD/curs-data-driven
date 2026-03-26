import * as productService from './product.service'

export const getAll = async (req, res) => {
  const products = await productService.getAll()
  res.json(products)
}

export const getById = async (req, res) => {
  const product = await productService.getById(req.params.id)
  res.json(product)
}

export const create = async (req, res) => {
  const product = await productService.create(req.body)
  res.json(product)
}

export const update = async (req, res) => {
  const product = await productService.update(req.params.id, req.body)
  res.json(product)
}

export const remove = async (req, res) => {
  await productService.remove(req.params.id)
  res.json({ success: true })
}