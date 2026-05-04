import dotenv from 'dotenv'

dotenv.config({ path: './.env' })

import app from './app'

console.log('ENV TEST EMAIL:', process.env.EMAIL_USER)
console.log('ENV TEST PASS:', process.env.EMAIL_PASS ? 'OK' : 'NO')

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
console.log(process.cwd())