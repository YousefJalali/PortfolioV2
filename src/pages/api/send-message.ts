import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

type Data = {
  error?: string
  success?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_ADDRESS,
      pass: process.env.GMAIL_PASSWORD,
    },
  })

  if (req.method === 'POST') {
    transporter.sendMail(
      {
        from: `Client <${req.body.email}>`,
        to: process.env.GMAIL_ADDRESS,
        subject: `Email from Portfolio`,
        text: req.body.message,
        html: `<p>${req.body.message} <br/> ${req.body.email}</p>`,
      },
      (err, info) => {
        if (err) {
          return res.status(404).json({
            //@ts-ignore
            error: `Connection refused at ${err.address}`,
          })
        }

        return res.status(250).json({
          success: `Message delivered to ${info.accepted}`,
        })
      }
    )
  }
}
