export default function Experience() {
  return (
    <section id="experience">
      <h2>Опыт работы</h2>
      <div className="timeline">
        <div className="timeline-item glass-card">
          <div className="timeline-header">
            <span className="company">KF21 / Физтех Москва</span>
            <span className="date">Сент 2025 — наст. время</span>
          </div>
          <div className="role">Frontend-разработчик React</div>
          <ul>
            <li>Разработал UI по Figma, адаптивная кроссбраузерная вёрстка</li>
            <li>Создал библиотеку из 15+ переиспользуемых компонентов → сокращение времени разработки на 30%</li>
            <li>Оптимизировал загрузку страницы на 25% (code splitting, lazy loading)</li>
            <li>Уменьшил бандл с 2.1 МБ до 1.4 МБ, покрытие тестами (Jest, RTL) — 75%</li>
            <li>Стек: React, Redux Toolkit, TypeScript, SCSS, Webpack, Storybook</li>
          </ul>
        </div>
        <div className="timeline-item glass-card">
          <div className="timeline-header">
            <span className="company">Индивидуальное предпринимательство</span>
            <span className="date">Фев 2023 — Март 2025</span>
          </div>
          <div className="role">Fullstack-разработчик</div>
          <ul>
            <li>Разработка fullstack-приложений под ключ: админ-панели, дашборды, образовательные проекты</li>
            <li>Кроссплатформенное приложение-аналог Duolingo (React Native + Expo + Django REST Framework)</li>
            <li>Проектирование архитектуры БД, API, аутентификация JWT, WebSocket</li>
            <li>Деплой на VPS (Docker, Nginx, CI/CD), домены, техподдержка</li>
            <li>Стек: React, React Native, Node.js/Express, Django, PostgreSQL, Docker</li>
          </ul>
        </div>
      </div>
    </section>
  );
}