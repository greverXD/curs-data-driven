import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import passport from 'passport'
import prisma from '../../config/db'
import jwt from 'jsonwebtoken'

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: 'http://localhost:3000/api/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value
        const googleId = profile.id

        if (!email) {
          return done(new Error('No email'), undefined)
        }

        // 🔍 ищем пользователя
        let user = await prisma.user.findUnique({
          where: { email }
        })

        // ➕ если нет — создаём
        if (!user) {
          user = await prisma.user.create({
            data: {
              email,
              role: 'USER',
              googleId
            }
          })
        }

        // 🔑 генерим JWT
        const token = jwt.sign(
          { userId: user.id },
          process.env.JWT_SECRET!,
          { expiresIn: '7d' }
        )

        // 🚀 отдаём в callback
        done(null, { user, token })
      } catch (e) {
        done(e, false)
      }
    }
  )
)