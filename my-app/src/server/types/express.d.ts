import { JwtPayload } from '../modules/google.stategy.ts/auth.types'

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload
    }
  }
}