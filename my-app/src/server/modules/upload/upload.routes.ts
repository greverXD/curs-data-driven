import { Router } from 'express'

import streamifier from 'streamifier'

import cloudinary from '../../config/cloudinary'

import { upload } from '../../middlewares/upload.middleware'

const router = Router()

router.post(
  '/',
  upload.single('image'),

  async (req, res) => {
    try {
      if (!req.file) {
        return res
          .status(400)
          .json({
            message: 'No file uploaded'
          })
      }

      const stream =
        cloudinary.uploader.upload_stream(
          {
            folder: 'myshop'
          },

          (error, result) => {
            if (error) {
              return res
                .status(500)
                .json(error)
            }

            return res.json({
              url: result?.secure_url
            })
          }
        )

      streamifier.createReadStream(
        req.file.buffer
      ).pipe(stream)

    } catch (e) {
      res.status(500).json(e)
    }
  }
)

export default router