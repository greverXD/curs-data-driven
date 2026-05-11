import dotenv from 'dotenv'

dotenv.config()

console.log(
  'CLOUDINARY:',
  process.env.CLOUDINARY_CLOUD_NAME
)

import app from './app'

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(
    `🚀 Server running on http://localhost:${PORT}`
  )
})