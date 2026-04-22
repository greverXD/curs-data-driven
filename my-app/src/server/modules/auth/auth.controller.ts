import { Request, Response, NextFunction } from 'express'
import * as authService from './auth.service'

export const register = async (req: Request, res: Response) => {
  const user = await authService.register(
    req.body.email,
    req.body.password
  )

  res.json(user)
}

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await authService.login(
      req.body.email,
      req.body.password
    )

    res.json(data)
  } catch (e) {
    next(e)
  }
}
export const verify = async (req: Request, res: Response) => {
  const { email, code } = req.body

  const data = await authService.verify(email, code)

  res.json(data)
}
export const resend = async (req: Request, res: Response) => {
  const { email } = req.body

  const data = await authService.resend(email)

  res.json(data)
}