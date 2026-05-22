import { Request, Response } from 'express';
import { sendEmails } from '../services/emailService';

export const submitContact = async (req: Request, res: Response) => {
  try {
    await sendEmails(req.body);
    res.status(200).json({ success: true, message: 'Письма отправлены' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Ошибка отправки. Попробуйте позже.' });
  }
};