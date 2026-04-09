import * as authService from './auth.service'

export const register = async (req, res) => {
  const user = await authService.register(req.body.email, req.body.password)
  res.json(user)
}

export const login = async (req, res, next) => {
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