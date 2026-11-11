export type ProjectCategory = 'all' | 'mashar' | 'kf21' | 'dosh' | 'frelance';

export interface Project {
  id: string;
  category: Exclude<ProjectCategory, 'all'>;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  period?: string;
  images: string[];
  achievements: string[];
  stack: string[];
  link?: string;
  linkLabel?: string;
  videoUrl?: string;
}

export function assetUrl(path: string): string {
  return '/' + path.split('/').filter(Boolean).map(encodeURIComponent).join('/');
}

export function getYoutubeEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    let id = '';

    if (parsed.hostname.includes('youtu.be')) {
      id = parsed.pathname.replace('/', '');
    } else if (parsed.hostname.includes('youtube.com')) {
      id = parsed.searchParams.get('v') ?? '';
    }

    return id ? `https://www.youtube.com/embed/${id}` : null;
  } catch {
    return null;
  }
}

export const categoryLabels: Record<ProjectCategory, string> = {
  all: 'Все',
  mashar: 'Mashar',
  kf21: 'KF21',
  dosh: 'DoshApp',
  frelance: 'Фриланс',
};

export const projects: Project[] = [
  {
    id: 'mashar',
    category: 'mashar',
    title: 'Mashar',
    subtitle: 'Маркетплейс китайских и локальных товаров',
    description:
      'Fullstack-платформа на Next.js и FastAPI: каталог, корзина, заказы, кабинеты покупателей и продавцов, админ-панель и встроенный мессенджер.',
    role: 'Fullstack-разработчик (ведущий)',
    period: 'Март 2025 — наст. время',
    images: [
      '/projects/mashar/MASHAR.jpg',
      '/projects/mashar/MESSENDJER.jpg',
    ],
    achievements: [
      'Разработал с нуля fullstack-платформу на Next.js, TypeScript и FastAPI + PostgreSQL',
      'Реализовал каталог, фильтрацию, корзину, заказы, ЛК покупателей/продавцов и админку',
      'Спроектировал REST API, структуру БД, JWT-аутентификацию и разграничение доступа',
      'Разработал встроенный мессенджер между покупателями и продавцами',
      'Результат: 20 магазинов и около 5 000 пользователей в production',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Docker', 'JWT', 'CI/CD'],
    link: 'https://www.mashar.ru/',
    linkLabel: 'mashar.ru',
  },
  {
    id: 'kf21',
    category: 'kf21',
    title: 'KF21 Физтех',
    subtitle: 'Платформа для образовательных учреждений',
    description:
      'Веб-платформа для школ и детских садов сети «Классы ФИЗТЕХ XXI». UI по Figma, библиотека компонентов и интеграция с REST API.',
    role: 'Frontend-разработчик React',
    period: 'Июнь 2024 — Февраль 2025',
    images: [
      '/projects/kf21/1.jpg',
      '/projects/kf21/2.png',
    ],
    achievements: [
      'Создал библиотеку из 15+ переиспользуемых компонентов — время разработки новых фич −30%',
      'Реализовал календарь с выбором дат/диапазонов и дропзону с валидацией',
      'Оптимизировал загрузку на 25%, снизил бандл с 2.1 МБ до 1.4 МБ',
      'Покрытие тестами Jest + RTL — 75%, вёл Storybook',
    ],
    stack: ['React', 'Redux Toolkit', 'TypeScript', 'SCSS', 'Webpack', 'Jest', 'Storybook'],
    link: 'https://kf21.ru/',
    linkLabel: 'kf21.ru',
  },
  {
    id: 'kvant',
    category: 'frelance',
    title: 'Kvant Management',
    subtitle: 'CMS для детского технопарка',
    description:
      'Платформа с нуля: публичный сайт, административная панель и личный кабинет педагога. Управление программами, новостями, журналом оценок и студентами.',
    role: 'Fullstack-разработчик',
    period: 'Фев 2023 — Март 2024',
    images: [
      '/projects/kvant/KVANT.jpg',
      '/projects/kvant/KVANT-ADMIN.jpg',
    ],
    achievements: [
      'Спроектировал и разработал публичный сайт, админ-панель и кабинет педагога',
      'Реализовал адаптивный UI с тёмной/светлой темой и версией для слабовидящих',
      'Backend на Node.js/Express: REST API, JWT, роли администратор/преподаватель',
      'Управление программами, новостями, журналом оценок и учебным планом',
      'Docker и production-деплой на Fly.io — платформа используется в 2 школах',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Zustand', 'Tailwind', 'Node.js', 'Express', 'PostgreSQL', 'Docker'],
    link: 'https://kvantmanager.tw1.ru/files',
    linkLabel: 'kvantmanager.tw1.ru',
    videoUrl: 'https://youtu.be/xYrM4q7Ufus?si=9mPVt5alNaK1SkBr',
  },
  {
    id: 'doska-oo',
    category: 'frelance',
    title: 'doska-oo',
    subtitle: 'Система управления заданиями Отдела образования',
    description:
      'Fullstack-система для автоматизации работы Отдела образования и 40 школ Шалинского района: постановка заданий, отчёты и проверка результатов.',
    role: 'Fullstack-разработчик',
    period: 'Фев 2023 — Март 2024',
    images: [
      '/projects/doska/DOSKA-JJ.jpg',
      '/projects/doska/NACH-OO.jpg',
    ],
    achievements: [
      'Разработал fullstack-систему для Отдела образования и 40 школ',
      'Backend на Django + frontend на React, REST API и ролевая модель (RBAC)',
      'Полный цикл заданий: постановка, распределение, сдача отчётов, проверка',
      'Docker Compose, Nginx, Gunicorn и production-деплой на Timeweb Cloud',
    ],
    stack: ['Python', 'Django', 'React', 'PostgreSQL', 'Docker', 'Nginx', 'Gunicorn'],
    link: 'https://ruoshali.tw1.ru/login',
    linkLabel: 'ruoshali.tw1.ru',
  },
  {
    id: 'pulse-meet',
    category: 'frelance',
    title: 'Pulse Meet',
    subtitle: 'Мини социальная сеть для знакомств',
    description:
      'Полный исходный код платформы знакомств: лента, профили, чаты и авторизация. Fullstack-разработка под ключ.',
    role: 'Fullstack-разработчик',
    period: '2023 — 2025',
    images: ['/projects/frelance/Pulse-Meet-Full-Source-Code.png'],
    achievements: [
      'Разработал fullstack-платформу знакомств с нуля',
      'Реализовал профили, ленту, чаты и JWT-авторизацию',
      'Собрал production-ready исходники с Docker и CI-ready структурой',
    ],
    stack: [
      'React',
      'TypeScript',
      'Next.js',
      'Node.js',
      'Django REST',
      'PostgreSQL',
      'JWT',
      'Docker',
      'Tailwind',
    ],
    link: 'https://youtu.be/-zhhre7_hvE?si=HSRM4LMqxQwx3jqz',
    linkLabel: 'Смотреть демо',
    videoUrl: 'https://youtu.be/-zhhre7_hvE?si=HSRM4LMqxQwx3jqz',
  },
  {
    id: 'doshapp',
    category: 'dosh',
    title: 'DoshApp',
    subtitle: 'Мобильное приложение · Duolingo-аналог',
    description:
      'Кроссплатформенное образовательное приложение с геймификацией, уроками и системой прогресса.',
    role: 'Fullstack-разработчик',
    period: '2023 — 2025',
    images: ['/projects/dosh/ddc751166894dfa35b766829ae081b07ad56b90a-1778053300.webp'],
    achievements: [
      'Спроектировал архитектуру мобильного приложения и базы данных',
      'Реализовал логику уроков, систему прогресса и аутентификацию',
      'Настроил API для синхронизации контента между клиентом и сервером',
      'Деплой на VPS: Docker, Nginx, подключение домена',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'Tailwind', 'Django REST', 'PostgreSQL'],
  },
  {
    id: 'tax-referent',
    category: 'frelance',
    title: 'Tax-Referent',
    subtitle: 'Система анализа налоговых рисков',
    description:
      'Веб-приложение для анализа налоговых рисков: формы ввода данных, отчёты и визуализация результатов проверки.',
    role: 'Fullstack-разработчик',
    period: '2023 — 2025',
    images: [
      '/projects/frelance/Tax-Referent/Скриншот-20260612-111201.jpg',
      '/projects/frelance/Tax-Referent/Скриншот-20260612-111258.jpg',
      '/projects/frelance/Tax-Referent/Скриншот-20260612-111316.jpg',
      '/projects/frelance/Tax-Referent/Скриншот-20260612-111527.jpg',
    ],
    achievements: [
      'Разработал интерфейс анализа налоговых рисков с нуля',
      'Реализовал бэкенд на Django с SQL-запросами для отчётов',
      'Настроил формы ввода, валидацию и генерацию результатов',
    ],
    stack: ['HTML/CSS/JS', 'Django', 'SQL', 'Python'],
  },
];

export function getProjectThumbnail(project: Project): string {
  return assetUrl(project.images[0]);
}
