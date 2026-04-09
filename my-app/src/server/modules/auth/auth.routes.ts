import { Router } from 'express'
import * as controller from './auth.controller'
import passport from 'passport'
import jwt from 'jsonwebtoken'
const router = Router()

router.post('/register', controller.register)
router.post('/login', controller.login)

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
)

router.get(
  '/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    const user = req.user as any

    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: '7d' }
    )

    res.json({ token })
  }
)

export default router