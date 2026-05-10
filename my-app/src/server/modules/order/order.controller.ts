import * as orderService from './order.service'
import { Request,Response,NextFunction } from 'express'
export const create = async (req:any, res:Response, next:NextFunction) => {
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

export const getMyOrders = async (req:any, res:Response, next:NextFunction) => {
  try {
    const orders = await orderService.getUserOrders(req.user.userId)
    res.json(orders)
  } catch (e) {
    next(e)
  }
}

export const getById = async (req:any, res:Response, next:NextFunction) => {
  try {
    const order = await orderService.getById(req.params.id,req.user.userId)
    res.json(order)
  } catch (e) {
    next(e)
  }
}
export const getAll = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
const orders = await orderService.getAllOrders(
  req.query.status as string,

  Number(req.query.page) || 1,

  Number(req.query.limit) || 5
)

    res.json(orders)
  } catch (e) {
    next(e)
  }
}