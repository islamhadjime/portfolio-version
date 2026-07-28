export type ProjectCategory = 'all' | 'dosh' | 'kf21' | 'frelance';

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
}

export function assetUrl(path: string): string {
  return '/' + path.split('/').filter(Boolean).map(encodeURIComponent).join('/');
}

export const categoryLabels: Record<ProjectCategory, string> = {
  all: 'Все',
  dosh: 'DoshApp',
  kf21: 'KF21',
  frelance: 'Фриланс',
};

export const projects: Project[] = [
  {
    id: 'doshapp',
    category: 'dosh',
    title: 'DoshApp',
    subtitle: 'Мобильное приложение · Duolingo-аналог',
    description:
      'Кроссплатформенное образовательное приложение с геймификацией, уроками и системой прогресса. Fullstack-разработка под ключ для частного заказчика.',
    role: 'Fullstack-разработчик',
    period: '2025',
    images: ['/projects/dosh/ddc751166894dfa35b766829ae081b07ad56b90a-1778053300.webp'],
    achievements: [
      'Спроектировал архитектуру мобильного приложения и базы данных',
      'Реализовал логику уроков, систему прогресса и аутентификацию',
      'Настроил API для синхронизации контента между клиентом и сервером',
      'Деплой на VPS: Docker, Nginx, подключение домена',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'Tailwind', 'Django REST', 'PostgreSQL'],
    link: '#',
    linkLabel: 'doshapp.ru',
  },
  {
    id: 'kf21',
    category: 'kf21',
    title: 'KF21 Физтех',
    subtitle: 'Платформа для образовательных учреждений',
    description:
      'Веб-платформа для школ и детских садов сети «Классы ФИЗТЕХ XXI». Разработка UI по макетам Figma, библиотека компонентов и интеграция с REST API.',
    role: 'Frontend-разработчик React',
    period: 'Сен 2025 — наст. время',
    images: [
      '/projects/kf21/1.jpg',
      '/projects/kf21/2.png',

    ],
    achievements: [
      'Создал библиотеку из 15+ переиспользуемых компонентов — время разработки новых фич сократилось на 30%',
      'Реализовал календарь с модальным окном, дропзону для загрузки файлов с валидацией',
      'Оптимизировал загрузку на 25% (code splitting, lazy loading), снизил бандл с 2.1 МБ до 1.4 МБ',
      'Покрытие тестами Jest + RTL — 75%, вёл Storybook для документации компонентов',
    ],
    stack: ['React', 'Redux Toolkit', 'TypeScript', 'SCSS', 'Webpack', 'Jest', 'Storybook'],
    link: 'https://kf21.ru/',
    linkLabel: 'kf21.ru',
  },
  {
    id: 'kvant',
    category: 'frelance',
    title: 'Kvant Management',
    subtitle: 'Админ-панель образовательных программ',
    description:
      'Веб-приложение для управления образовательными программами: дашборды, аналитика, формы с валидацией и экспорт данных.',
    role: 'Fullstack-разработчик',
    period: '2023 — 2025',
    images: [
        '/projects/frelance/CODE.png', 
    ],
    achievements: [
      'Разработал админ-панель с дашбордами и аналитикой',
      'Реализовал CRUD для образовательных программ и пользователей',
      'Интегрировал REST API, JWT-авторизацию и формы с валидацией',
      'Деплой на Vercel, адаптивная вёрстка',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'JWT'],
    link: 'https://youtu.be/xYrM4q7Ufus?si=9mPVt5alNaK1SkBr',
    linkLabel: 'Демо',
  },
  {
    id: 'Pulse-Meet-Full-Source-Code',
    category: 'frelance',
    title: 'Pulse Meet Full Source Code',
    subtitle: 'Мини социальная сеть для знакомств',
    description:
      'Полное исходное кодо для платформы Pulse Meet',
    role: 'Fullstack-разработчик',
    period: '2023 — 2025',
    images: ['/projects/frelance/Pulse-Meet-Full-Source-Code.png'],
    achievements: ['Разработал полное исходное кодо для платформы Pulse Meet'],
    stack: [
      'React',
      'TypeScript',
      'Node.js',
      'Next.js',
      'PostgreSQL',
      'JWT',
      'Django REST',
      'Docker',
      'Tailwind',
    ],
    link: 'https://youtu.be/-zhhre7_hvE?si=HSRM4LMqxQwx3jqz',
    linkLabel: 'Демо',
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
      'Деплой на PythonAnywhere',
    ],
    stack: ['HTML/CSS/JS', 'Django', 'SQL', 'Python'],
    link: '#',
    linkLabel: 'Демо',
  },
  {
    id: 'ege-leadership',
    category: 'frelance',
    title: 'EGE Leadership',
    subtitle: 'Система управления образовательными проектами',
    description:
      'Аналитический модуль для системы управления образовательными проектами',
    role: 'Frontend-разработчик React',
    period: 'Сен 2025 — наст. время',
    images: ['/projects/frelance/ANALITIC.jpg'],
    achievements: ['Разработал аналитический модуль для системы управления образовательными проектами'],
    stack: ['React', 'TypeScript', 'Django', 'PostgreSQL', 'SCSS', 'Chart.js'],
    link: 'https://ruoshali.tw1.ru/c/ege-leadership',
    linkLabel: 'ege-leadership.ru',
  },
  {
    id: 'MVP Projects',
    category: 'frelance',
    title: 'MVP Projects',
    subtitle: 'Дашборд для образовательного проекта',
    description:
      'Веб-дашборд для мониторинга учебного процесса: статистика, управление контентом и отчёты для администраторов.',
    role: 'Fullstack-разработчик',
    period: '2023 — 2025',
    images: [
      '/projects/frelance/21c56a56c6cb0df2e7c09b68e3b8140c0c7996f1-1778053974.webp',
      '/projects/frelance/30d4a01d171bdfdc01766dd8026f767d5d65e893-1778052510.webp',
    ],
    achievements: [
      'Спроектировал интерфейс дашборда с ключевыми метриками',
      'Реализовал фильтрацию, экспорт и импорт данных',
      'Настроил REST API и ролевую авторизацию',
    ],
    stack: ['React', 'TypeScript', 'Django', 'PostgreSQL', 'SCSS'],
  },
];

export function getProjectThumbnail(project: Project): string {
  return assetUrl(project.images[0]);
}
