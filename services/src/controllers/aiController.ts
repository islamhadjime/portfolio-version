import { Request, Response } from 'express';
import { generateTagline, improveText, generateQuizQuestion, checkAnswer } from '../services/aiService';

export const getTagline = async (req: Request, res: Response) => {
  
  const tagline = await generateTagline();
  res.json({ tagline });
};

export const improveComment = async (req: Request, res: Response) => {
  const { text } = req.body;
  if (!text || text.length < 3) return res.status(400).json({ error: 'Слишком короткий текст' });
  console.log(text);
  const improved = await improveText(text);
  res.json({ improved });
};

export const generateQuiz = async (req: Request, res: Response) => {
  const { topic } = req.body;
  if (!topic) return res.status(400).json({ error: 'Тема обязательна' });
  try {
    const question = await generateQuizQuestion(topic);
    console.log(topic);
    res.json(question);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка генерации вопроса' });
  }
};

export const checkQuizAnswer = async (req: Request, res: Response) => {
  const { question, answer, correct } = req.body;

  if (!question || !answer || !correct) return res.status(400).json({ error: 'Неполные данные' });
  console.log();
  
  const feedback = await checkAnswer(question, answer, correct);
  res.json({ feedback });
};