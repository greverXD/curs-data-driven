import { Router } from 'express'
import * as controller from './auth.controller'
import passport from 'passport'
import jwt from 'jsonwebtoken'
const router = Router()

router.post('/register', controller.register)
router.post('/login', controller.login)
router.post('/verify', controller.verify)
router.post('/resend', controller.resend)

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
    if (!req.user) {
      return res.redirect('http://localhost:5173/login?error=google_auth_failed')
    }

const data = req.user as any

const user = data.user
const token = data.token

res.redirect(
  `http://localhost:5173/auth-success?token=${token}&role=${user.role}&email=${user.email}&id=${user.id}`
)
  }
)

export default router