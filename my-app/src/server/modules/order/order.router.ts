import { Router } from 'express'
import * as orderController from './order.controller'
import { authMiddleware } from '../../middlewares/auth.middleware'

const router = Router()

router.post('/', authMiddleware, orderController.create)
router.get('/my', authMiddleware, orderController.getMyOrders)
router.get('/:id', authMiddleware, orderController.getById)

export default router