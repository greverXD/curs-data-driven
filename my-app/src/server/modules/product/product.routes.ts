import { Router } from 'express'
import * as productController from './product.controller'
import { authMiddleware } from '../../middlewares/auth.middleware'
import { roleMiddleware } from '../../middlewares/role.middleware'

const router = Router()
router.get('/', productController.getAll)
router.get('/popular',productController.getPopular)
router.get('/new', productController.getNew)
router.get('/sale', productController.getSale)
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