// api/send-email.js (Serverless Function)
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { user_name, user_email, message } = req.body;
  if (!user_name || !user_email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Create transporter using Gmail SMTP and app password
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,            // your Gmail address
      pass: process.env.GMAIL_APP_PASSWORD,     // your Gmail app password
    },
  });

  const mailOptions = {
    from: `"${user_name}" <${process.env.GMAIL_USER}>`,  // sender address
    to: process.env.GMAIL_USER,                           // your email as recipient
    replyTo: user_email,                                  // replies go to visitor
    subject: `Contact from ${user_name}`,                 // email subject
    text: message,                                        // plain text body
    html: `<p>${message}</p>`,                           // html body
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ status: 'Message sent' });
  } catch (error) {
    console.error('Error sending mail:', error);
    return res.status(500).json({ error: 'Error sending email' });
  }
}
