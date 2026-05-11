import nodemailer from 'nodemailer'

export const sendEmail = async (to: string, code: string) => {
    console.log('EMAIL:', process.env.EMAIL_USER)
console.log('PASS:', process.env.EMAIL_PASS)
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,

    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })

  // await transporter.sendMail({
  //   from: `"MyShop" <${process.env.EMAIL_USER}>`,
  //   to,
  //   subject: 'Код подтверждения',
  //   html: `
  //     <div style="font-family:sans-serif">
  //       <h2>Подтверждение регистрации</h2>
  //       <p>Ваш код:</p>
  //       <h1>${code}</h1>
  //     </div>
  //   `
  // })

}