import { Router } from 'express'
import * as productController from './product.controller'
import { authMiddleware } from '../../middlewares/auth.middleware'
import { roleMiddleware } from '../../middlewares/role.middleware'

const router = Router()
router.get('/', productController.getAll)
router.get('/:id', productController.getById)

router.post(
  '/',
  authMiddleware,
  roleMiddleware(['ADMIN']),
  productController.create
)

router.put(
  '/:id',
  authMiddleware,
  roleMiddleware(['ADMIN']),
  productController.update
)

router.delete(
  '/:id',
  authMiddleware,
  roleMiddleware(['ADMIN']),
  productController.remove
)

export default router