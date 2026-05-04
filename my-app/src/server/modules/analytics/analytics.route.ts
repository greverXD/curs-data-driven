import { Router } from 'express'

import { getDashboard } from './analytics.controller'
import { authMiddleware} from '../../middlewares/auth.middleware'
import { roleMiddleware } from '../../middlewares/role.middleware'
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()
const router = Router()
router.post('/event', async (req, res) => {
  const { type, page } = req.body

  await prisma.analyticsEvent.create({
    data: {
      type,
      page,
    //   userId: req.user?.id // если авторизован
    }
  })

  res.sendStatus(200)
})
router.get(
  '/dashboard',
  authMiddleware,
  roleMiddleware(['ADMIN']),
  getDashboard
)

export default router