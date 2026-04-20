import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import prisma from '../../config/db'

export const register = async (email: string, password: string) => {
  const existingUser = await prisma.user.findUnique({
    where: { email }
  })

  if (existingUser) {
    const error: any = new Error('User already exists')
    error.status = 400
    throw error
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      role: 'USER'
    }
  })

  return {
    id: user.id,
    email: user.email,
    role: user.role
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

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    const error: any = new Error('Invalid password')
    error.status = 400
    throw error
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