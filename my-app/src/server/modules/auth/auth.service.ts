import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import prisma from '../../config/db'
import validator from 'validator'

export const register = async (email: string, password: string) => {
  if (!validator.isEmail(email)) {
    throw new Error('Некорректный email')
  }

  const existingUser = await prisma.user.findUnique({
    where: { email }
  })

  if (existingUser) {
    throw new Error('User already exists')
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      role: 'USER'
    }
  })

  const token = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET!,
    { expiresIn: '7d' }
  )

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      role: user.role
    }
  }
}
export const login = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: { email }
  })

  if (!user) {
    const error: any = new Error('User not found')
    error.status = 400
    throw error
  }

  if (!user.password) {
    const error: any = new Error('Use Google login')
    error.status = 400
    throw error
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    const error: any = new Error('Invalid password')
    error.status = 400
    throw error
  }
  if (!user.isVerified) {
  throw new Error('Подтвердите почту')
}
  const token = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET!,
    { expiresIn: '7d' }
  )

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      role: user.role
    }
  }
}
export const resend = async (email: string) => {
  const code = Math.floor(100000 + Math.random() * 900000).toString()

  await prisma.user.update({
    where: { email },
    data: { verifyCode: code }
  })

  await sendEmail(email, code)
}