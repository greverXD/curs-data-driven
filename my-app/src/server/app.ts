import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import passport from 'passport'

import '../server/modules/auth/google.stategy'
import authRoutes from './modules/auth/auth.routes'
import productRoutes from './modules/product/product.routes'
import orderRoutes from './modules/order/order.router'

import { errorMiddleware } from './middlewares/error.middleware'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/orders', orderRoutes)

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' })
})
app.use(passport.initialize())
app.use(errorMiddleware)

export default app



