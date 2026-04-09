import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import prisma from '../../config/db'

export const register = async (email: string, password: string) => {
  const existingUser = await prisma.user.findUnique({
    where: { email }
  })

  if (existingUser) {
    throw new Error('User already exists')
  }
  const hashed = await bcrypt.hash(password, 10)
  const user = await prisma.user.create({
    data: {
      email,
      password: hashed,
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

  if (!user) throw new Error('User not found')

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) throw new Error('Invalid password')
  const token = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET!,
    { expiresIn: '7d' }
  )

  return { token }
}