import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import passport from 'passport'

import '../server/modules/auth/google.stategy'
import authRoutes from './modules/auth/auth.routes'
import productRoutes from './modules/product/product.routes'
import orderRoutes from './modules/order/order.router'
import analyticsRouter from './modules/analytics/analytics.route'
import { errorMiddleware } from './middlewares/error.middleware'

const app = express()

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true
  })
)
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/analytics', analyticsRouter)
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' })
})
app.use(passport.initialize())
app.use(errorMiddleware)

export default app



