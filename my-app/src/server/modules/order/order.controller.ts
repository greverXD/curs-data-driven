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
    const order = await orderService.getById(req.params.id)
    res.json(order)
  } catch (e) {
    next(e)
  }
}