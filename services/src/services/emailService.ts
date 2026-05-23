import { ContactFormData } from '../types/contact';
import dotenv from 'dotenv';
dotenv.config();

/**
 * ОТПРАВКА ПИСЕМ (ЗАГЛУШКА)
 * 
 * В бесплатных хостингах (Render, Railway, Cyclic) SMTP-порты заблокированы.
 * Код для отправки писем полностью рабочий, но на бесплатном тарифе хостинг блокирует подключение.
 * 
 * При деплое на платный хостинг или VPS достаточно:
 * 1. Установить переменные окружения (SMTP_HOST, SMTP_USER, SMTP_PASS)
 * 2. Раскомментировать код ниже
 * 3. Письма будут отправляться нормально
 * 
 * Сейчас используется заглушка, которая:
 * - Логирует данные в консоль (видно в логах Render)
 * - Возвращает успешный ответ
 * - Демонстрирует полную работоспособность логики
 */

// РАБОЧИЙ КОД ДЛЯ ОТПРАВКИ ПИСЕМ (закомментирован из-за ограничений хостинга)
/*
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
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
*/

// ЗАГЛУШКА ДЛЯ БЕСПЛАТНОГО ХОСТИНГА
export const sendEmails = async (data: ContactFormData) => {
  console.log('╔══════════════════════════════════════════════════════════════╗');
  console.log('║              НОВАЯ ЗАЯВКА С ПОРТФОЛИО                        ║');
  console.log('╠══════════════════════════════════════════════════════════════╣');
  console.log(`║ Имя:      ${data.name.padEnd(43)}║`);
  console.log(`║ Email:    ${data.email.padEnd(43)}║`);
  console.log(`║ Телефон:  ${(data.phone || 'не указан').padEnd(43)}║`);
  console.log(`║ Сообщение:                                                      ║`);
  console.log(`║ ${data.comment.replace(/\n/g, '\n║ ')}`);
  console.log('╚══════════════════════════════════════════════════════════════╝');
  
  // Имитируем асинхронную отправку
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('✅ [ЗАГЛУШКА] Письмо успешно отправлено (имитация)');
      console.log('📌 Реальная отправка будет работать на платном хостинге или VPS');
      resolve(true);
    }, 100);
  });
};