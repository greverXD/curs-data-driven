import * as orderService from './order.service'

export const create = async (req, res, next) => {
  try {
    const order = await orderService.createOrder(
      req.user.userId,
      req.body
    )

    res.status(201).json(order)
  } catch (e) {
    next(e)
  }
}

export const getMyOrders = async (req, res, next) => {
  try {
    const orders = await orderService.getUserOrders(req.user.userId)
    res.json(orders)
  } catch (e) {
    next(e)
  }
}

export const getById = async (req, res, next) => {
  try {
    const order = await orderService.getById(req.params.id)
    res.json(order)
  } catch (e) {
    next(e)
  }
}