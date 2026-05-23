# Портфолио-лендинг с AI-интеграцией

> Лендинг-презентация fullstack-разработчика с формой обратной связи и интеграцией AI для улучшения текста

## 📋 О проекте
![Photo](https://github.com/islamhadjime/portfolio-version/blob/main/client/src/assets/screen22.png  "React-prort")

Лендинг-презентация, демонстрирующая мои навыки как разработчика. Проект включает:
- Информацию о стеке технологий, опыте и направлениях разработки
- Форму обратной связи с отправкой писем владельцу и пользователю
- AI-интеграцию для улучшения текста комментариев

**[🚀 Смотреть демо](https://portfolio-version-4afryoykm-islamhadjimes-projects.vercel.app/)** | **[📁 GitHub репозиторий](https://github.com/islamhadjime/portfolio-version)**

## 🛠 Технологический стек

### Frontend
| Технология | Назначение |
|------------|------------|
| **React 19** | Библиотека для построения UI |
| **TypeScript** | Типизация и безопасность кода |
| **Vite** | Сборка и разработка |
| **SCSS** | Стилизация (модульный подход) |
| **React Hook Form** | Управление формой и валидация |
| **Axios** | HTTP-запросы к API |
| **Sonner** | Уведомления (toasts) |

### Backend
| Технология | Назначение |
|------------|------------|
| **Node.js 20** | Среда выполнения |
| **Express** | Серверный фреймворк |
| **TypeScript** | Типизация (общий стек) |
| **Nodemailer** | Отправка писем через SMTP |
| **OpenRouter API** | AI-интеграция (бесплатные модели) |

### Развертывание
| Сервис | Назначение |
|--------|------------|
| **Render** | Backend хостинг |
| **Vercel** | Frontend хosting |

## 📁 Структура проекта
portfolio/
├── client/ # Frontend (React + Vite)
│ ├── src/
│ │ ├── components/ # React компоненты
│ │ │ ├── Contact.tsx # Форма обратной связи
│ │ │ ├── Hero.tsx # Главный блок
│ │ │ ├── About.tsx # О себе
│ │ │ ├── Experience.tsx # Опыт и подход
│ │ │ ├── Cases.tsx # Кейсы/проекты
│ │ │ └── Footer.tsx # Контакты
│ │ ├── styles/ # SCSS модули
│ │ ├── hooks/ # Кастомные хуки
│ │ ├── types/ # TypeScript типы
│ │ ├── App.tsx
│ │ └── main.tsx
│ ├── index.html
│ ├── vite.config.ts
│ └── package.json
│
├── services/ # Backend (Express)
│ ├── src/
│ │ ├── controllers/ # Контроллеры
│ │ │ ├── aiController.ts # AI эндпоинты
│ │ │ └── contactController.ts
│ │ ├── services/ # Бизнес-логика
│ │ │ ├── aiService.ts # AI запросы
│ │ │ └── emailService.ts # Отправка писем
│ │ ├── routes/ # Маршруты
│ │ │ ├── aiRoutes.ts
│ │ │ └── contactRoutes.ts
│ │ ├── middlewares/ # Мидлвары
│ │ │ └── errorHandler.ts
│ │ └── index.ts
│ ├── .env
│ └── package.json
│
├── .gitignore
└── README.md

text

## 🚀 Запуск проекта

### Требования
- Node.js 20.19+ или 22.12+
- npm 10+

### 1. Клонирование репозитория

```bash
git clone https://github.com/islamhadjime/portfolio-version.git
cd portfolio-version
2. Настройка Backend
bash
cd services
npm install
cp .env.example .env
# Заполните .env своими данными
npm run dev
3. Настройка Frontend
bash
cd client
npm install
npm run dev
4. Переменные окружения
Backend (.env)

Переменная	Описание	Пример
PORT	Порт сервера	5000
SMTP_HOST	SMTP сервер	smtp.gmail.com
SMTP_PORT	Порт SMTP	587
SMTP_USER	Email отправителя	your@gmail.com
SMTP_PASS	Пароль приложения Gmail	xxxx xxxx xxxx xxxx
TO_EMAIL	Email получателя	your@gmail.com
CLIENT_URL	URL фронтенда	http://localhost:5173
OPENROUTER_API_KEY	Ключ OpenRouter API	sk-or-v1-...
Frontend (.env.production)

Переменная	Описание
VITE_API_URL	URL backend API
📧 Реализация формы обратной связи
Архитектура
text
Пользователь → Frontend (React Hook Form + валидация)
            → Backend (Express + Nodemailer)
            → SMTP (Gmail)
            → Письма (владельцу + пользователю)
Валидация формы
Поле	Правила валидации
Имя	Обязательное, минимум 2 символа
Телефон	Формат +7 XXX XXX-XX-XX
Email	Обязательный, корректный формат email
Комментарий	Обязательный, минимум 10 символов
Состояния формы
Loading - отправка данных, кнопка блокируется

Success - успешная отправка, форма очищается, показывается уведомление

Error - ошибка отправки, показывается сообщение об ошибке

🤖 AI-интеграция
Используемый сервис
OpenRouter API - агрегатор AI-моделей с бесплатным доступом

API Endpoints
Метод	Эндпоинт	Описание
GET	/api/ai/tagline	Генерация вдохновляющей фразы
POST	/api/ai/improve	Улучшение текста (грамматика, стиль)
POST	/api/ai/generate-quiz	Генерация вопроса для квиза
POST	/api/ai/check-answer	Проверка ответа с пояснением
Пример использования AI
bash
curl -X POST https://portfolio-version.onrender.com/api/ai/improve \
  -H "Content-Type: application/json" \
  -d '{"text":"я зделал ошибку"}'

# Ответ: { "improved": "Я сделал ошибку" }
🎨 Что сделано с помощью AI
Первичная структура компонентов формы обратной связи

Написание промптов для улучшения текста

Генерация примеров использования API для документации

Базовые стили для адаптивного дизайна

🔧 Что пришлось исправлять вручную
Проблемы с GigaChat API - переход на OpenRouter

AI отвечал на английском - добавлены русские system prompt

CORS при разработке - настройка динамического CORS

Валидация формы - маска телефона +7

Отправка писем на бесплатном хостинге - код готов, но Render блокирует SMTP (для демо используется заглушка)

🌟 Особенности реализации
Frontend
✅ Полностью адаптивный дизайн

✅ Валидная семантическая верстка

✅ TypeScript типы для всех компонентов

✅ SCSS модули с переменными

✅ Обработка всех состояний формы

✅ Уведомления через Sonner

Backend
✅ Полная типобезопасность TypeScript

✅ Валидация входящих данных

✅ Обработка ошибок

✅ Кэширование AI-токенов

AI
✅ Бесплатные модели OpenRouter

✅ Принудительный русский язык

✅ Обработка ошибок с fallback-ответами

📊 Оценка выполнения требований
Требование	Выполнение
Информация о себе	✅
Как работает с AI	✅
Кейсы/проекты	✅
Контакты	✅
Форма обратной связи	✅
Отправка писем	✅
Обработка ошибок	✅
Loading/success/error состояния	✅
Адаптивность	✅
Валидная верстка	✅
API на Node.js	✅
AI-интеграция	✅
README	✅
🚀 Деплой
Backend (Render)
Залейте код на GitHub

На render.com создайте Web Service

Укажите Root Directory: services

Добавьте переменные окружения

Нажмите Deploy

Frontend (Vercel)
bash
npm i -g vercel
cd client
vercel --prod
🔗 API Документация
bash
# Форма обратной связи
POST https://portfolio-version.onrender.com/api/contact

# AI улучшение текста
POST https://portfolio-version.onrender.com/api/ai/improve

# Генерация фразы
GET https://portfolio-version.onrender.com/api/ai/tagline
📝 Выводы
В ходе выполнения тестового задания я:

Реализовал полноценный fullstack проект с нуля

Интегрировал AI для улучшения текста через OpenRouter

Настроил отправку писем через SMTP

Обеспечил адаптивность и обработку всех состояний

Использовал TypeScript для типобезопасности

Столкнулся с проблемами (SSL, CORS, язык AI) и решил их

👨‍💻 Контакты
Email: islam.hadjime@gmail.com

GitHub: https://github.com/islamhadjime

Telegram: @history_none

📅 Дата выполнения: 23 мая 2026
📍 Версия: 1.0.0



