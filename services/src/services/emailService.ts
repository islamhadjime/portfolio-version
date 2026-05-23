import nodemailer from 'nodemailer';
import { ContactFormData } from '../types/contact';
import dotenv from 'dotenv';
dotenv.config();
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  family: 4,
  tls: {
    rejectUnauthorized: false
  },
  socketTimeout: 30000,
  connectionTimeout: 30000,
});

export const sendEmails = async (data: ContactFormData) => {
  const { name, email, phone, comment } = data;

  const ownerMail = {
    from: process.env.SMTP_USER,
    to: process.env.TO_EMAIL,
    subject: 'Новая заявка с портфолио',
    text: `Имя: ${name}\nEmail: ${email}\nТелефон: ${phone || 'не указан'}\nСообщение:\n${comment}`,
  };

  const userCopy = {
    from: process.env.SMTP_USER,
    to: email,
    subject: 'Копия вашего сообщения',
    text: `Здравствуйте, ${name}!\n\nСпасибо за обращение. Копия вашего сообщения:\n\n"${comment}"\n\nЯ свяжусь с вами в ближайшее время.\n\nС уважением,\nИслам`,
  };

  await Promise.all([transporter.sendMail(ownerMail), transporter.sendMail(userCopy)]);
};