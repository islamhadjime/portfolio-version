import { Request, Response, NextFunction } from 'express';

export const validateContact = (req: Request, res: Response, next: NextFunction) => {
  const { name, email, comment } = req.body;
  if (!name || !email || !comment) {
    return res.status(400).json({ error: 'Имя, email и сообщение обязательны' });
  }
  const emailRegex = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Неверный формат email' });
  }
  next();
};