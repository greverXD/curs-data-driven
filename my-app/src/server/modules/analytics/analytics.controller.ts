import { Request, Response } from 'express'
import * as service from './analytics.service'

export const getDashboard = async (req: Request, res: Response) => {
  const data = await service.getDashboard()
  res.json(data)
}