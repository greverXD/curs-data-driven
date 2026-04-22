import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import prisma from '../../config/db'
import validator from 'validator'
import { sendEmail } from './mail.service'
export const register = async (email: string, password: string) => {
  if (!validator.isEmail(email)) {
    throw new Error('Некорректный email')
  }

const existingUser = await prisma.user.findUnique({
  where: { email }
})

if (existingUser) {
 
  if (!existingUser.isVerified) {
    const code = Math.floor(100000 + Math.random() * 900000).toString()

    await prisma.user.update({
      where: { email },
      data: {
        verifyCode: code
      }
    })

    await sendEmail(email, code)

    return {
      message: 'Код отправлен повторно'
    }
  }


  throw new Error('Пользователь уже существует')
  
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


export const verify = async (email: string, code: string) => {
  const user = await prisma.user.findUnique({
    where: { email }
  })

  if (!user || user.verifyCode !== code) {
    throw new Error('Неверный код')
  }

  const updated = await prisma.user.update({
    where: { email },
    data: {
      isVerified: true,
      verifyCode: null
    }
  })

  const token = jwt.sign(
    { userId: updated.id, role: updated.role },
    process.env.JWT_SECRET!,
    { expiresIn: '7d' }
  )

  return {
    token,
    user: {
      id: updated.id,
      email: updated.email,
      role: updated.role
    }
  }
}
export const resend = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email }
  })

  if (!user) {
    throw new Error('Пользователь не найден')
  }

  if (user.isVerified) {
    throw new Error('Уже подтвержден')
  }

  const code = Math.floor(100000 + Math.random() * 900000).toString()

  await prisma.user.update({
    where: { email },
    data: { verifyCode: code }
  })

  await sendEmail(email, code)

  return { message: 'Код отправлен повторно' }
}