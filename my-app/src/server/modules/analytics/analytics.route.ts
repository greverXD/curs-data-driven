import { Router } from 'express'

import { getDashboard } from './analytics.controller'

import { authMiddleware } from '../../middlewares/auth.middleware'
import { roleMiddleware } from '../../middlewares/role.middleware'

import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

export const prisma = new PrismaClient()

const router = Router()

router.post('/event', async (req, res) => {
  try {
    const {
      type,
      page,
      productId
    } = req.body

    // 🔐 optional auth
    const authHeader =
      req.headers.authorization

    let user: any = null

    if (authHeader) {
      try {
        const token =
          authHeader.split(' ')[1]

        user = jwt.verify(
          token,
          process.env.JWT_SECRET!
        )
      } catch {
        user = null
      }
    }

    // 🚫 не считаем admin
    if (user?.role === 'ADMIN') {
      return res.sendStatus(200)
    }

    // 🚫 не считаем admin routes
    if (page?.startsWith('/admin')) {
      return res.sendStatus(200)
    }

    // 🌍 ip
    const forwarded =
      req.headers['x-forwarded-for']

    const ip = Array.isArray(forwarded)
      ? forwarded[0]
      : forwarded?.split(',')[0] ||
        req.socket.remoteAddress

    // 📊 analytics
    await prisma.analyticsEvent.create({
      data: {
        type,

        page,

        productId,

        userAgent:
          req.headers['user-agent'] as string,

        ipAddress: ip,

        userId: user?.userId
      }
    })

    res.sendStatus(200)
  } catch (e) {
    console.error(e)

    res.sendStatus(500)
  }
})

router.get(
  '/dashboard',
  authMiddleware,
  roleMiddleware(['ADMIN']),
  getDashboard
)

export default router