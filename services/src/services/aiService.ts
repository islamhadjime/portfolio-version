import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1';
const MODEL = 'openrouter/free';

async function openrouterRequest(
  messages: Array<{ role: string; content: string }>,
  options?: { max_tokens?: number; temperature?: number }
): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  
  if (!apiKey) {
    throw new Error(' OPENROUTER_API_KEY не указан в .env');
  }

  try {
    const response = await axios({
      method: 'post',
      url: `${OPENROUTER_API_URL}/chat/completions`,
      data: {
        model: MODEL,
        messages,
        temperature: options?.temperature || 0.7,
        max_tokens: options?.max_tokens || 300
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': process.env.CLIENT_URL || 'http://localhost:5173',
        'X-Title': 'Portfolio Backend'
      }
    });
    
    return response.data.choices[0]?.message?.content || '';
  } catch (error: any) {
    console.error('Ошибка запроса к OpenRouter:', error.response?.data || error.message);
    throw error;
  }
}


export const generateTagline = async (): Promise<string> => {
  try {
    const result = await openrouterRequest([
      { 
        role: 'system', 
        content: 'Ты — русскоязычный помощник. Отвечай ТОЛЬКО на русском языке, без английских слов. Будь кратким.' 
      },
      { 
        role: 'user', 
        content: 'Напиши короткую вдохновляющую фразу для fullstack-разработчика. Максимум 10 слов. Только фразу на русском.' 
      }
    ], { max_tokens: 50, temperature: 0.8 });
    
    return result || 'Создаю современные веб-приложения под ключ';
  } catch (error) {
    console.error('AI tagline error:', error);
    return 'Создаю современные веб-приложения под ключ';
  }
};

export const improveText = async (text: string): Promise<string> => {
  if (!text || text.length < 2) return text;
  
  try {
    const result = await openrouterRequest([
      { 
        role: 'system', 
        content: 'Ты — русскоязычный редактор. Твоя задача: исправить грамматику, сделать текст вежливым и профессиональным. Сохрани смысл. Ответь ТОЛЬКО исправленным текстом на русском языке. Без пояснений.' 
      },
      { 
        role: 'user', 
        content: `Исправь этот текст на русском: "${text}"` 
      }
    ], { max_tokens: 500, temperature: 0.7 });
    
    return result || text;
  } catch (error) {
    console.error('AI improve error:', error);
    return text;
  }
};

export const generateQuizQuestion = async (topic: string) => {
  try {
    const result = await openrouterRequest([
      { 
        role: 'system', 
        content: 'Ты — генератор вопросов для IT-теста. Твоя задача: создать вопрос на русском языке. Верни ТОЛЬКО JSON в формате: {"question": "текст вопроса на русском", "options": ["вариант1", "вариант2", "вариант3"], "correct": "правильный вариант"}. Без пояснений, только JSON. Все ответы должны быть на русском языке.' 
      },
      { 
        role: 'user', 
        content: `Сгенерируй вопрос по теме "${topic}" на русском языке.` 
      }
    ], { temperature: 0.7, max_tokens: 300 });
    
    const jsonMatch = result.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    
    return {
      question: `Что такое ${topic}?`,
      options: ['Вариант 1', 'Вариант 2', 'Вариант 3'],
      correct: 'Вариант 1'
    };
  } catch (error) {
    console.error('AI quiz error:', error);
    return {
      question: `Что такое ${topic}?`,
      options: ['Вариант 1', 'Вариант 2', 'Вариант 3'],
      correct: 'Вариант 1'
    };
  }
};

export const checkAnswer = async (question: string, userAnswer: string, correctAnswer: string): Promise<string> => {
  try {
    const result = await openrouterRequest([
      { 
        role: 'system', 
        content: 'Ты — эксперт по IT. Отвечай ТОЛЬКО на русском языке, вежливо и дружелюбно. Дай обратную связь (1-2 предложения): правильно или нет, и почему. Без английских слов.' 
      },
      { 
        role: 'user', 
        content: `Вопрос на русском: ${question}\nПравильный ответ на русском: ${correctAnswer}\nОтвет пользователя на русском: ${userAnswer}\n\nСкажи, правильный ли ответ? Ответь на русском.` 
      }
    ], { max_tokens: 120, temperature: 0.5 });
    
    return result || 'Ответ принят.';
  } catch (error) {
    console.error('AI check error:', error);
    return 'Проверь ответ. Что-то пошло не так.';
  }
};
