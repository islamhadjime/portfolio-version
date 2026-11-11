export default function Experience() {
  return (
    <section id="experience">
      <h2>Опыт работы</h2>
      <div className="timeline">
        <div className="timeline-item glass-card">
          <div className="timeline-header">
            <span className="company">Mashar · Москва</span>
            <span className="date">Март 2025 — наст. время</span>
          </div>
          <div className="role">Fullstack-разработчик (ведущий)</div>
          <ul>
            <li>Разработал с нуля маркетплейс на Next.js, TypeScript и FastAPI + PostgreSQL</li>
            <li>Каталог, корзина, заказы, ЛК покупателей/продавцов, админка и встроенный мессенджер</li>
            <li>REST API, JWT, CI/CD и production-деплой — 20 магазинов и ~5 000 пользователей</li>
            <li>Стек: Next.js, React, TypeScript, FastAPI, PostgreSQL, Docker, CI/CD</li>
          </ul>
        </div>

        <div className="timeline-item glass-card">
          <div className="timeline-header">
            <span className="company">KF21 / Физтех · Москва</span>
            <span className="date">Июнь 2024 — Февраль 2025</span>
          </div>
          <div className="role">Frontend-разработчик React</div>
          <ul>
            <li>UI по Figma, адаптивная и кроссбраузерная вёрстка</li>
            <li>Библиотека из 15+ компонентов → −30% времени на новые фичи</li>
            <li>Оптимизация: −25% к загрузке, бандл 2.1 → 1.4 МБ, покрытие тестами 75%</li>
            <li>Стек: React, TypeScript, Redux Toolkit, SCSS, Webpack, Jest, Storybook</li>
          </ul>
        </div>

        <div className="timeline-item glass-card">
          <div className="timeline-header">
            <span className="company">Индивидуальное предпринимательство</span>
            <span className="date">Февраль 2023 — Март 2024</span>
          </div>
          <div className="role">Fullstack-разработчик</div>
          <ul>
            <li>Kvant Management — CMS для детского технопарка (React + Node.js/Express)</li>
            <li>doska-oo — система заданий для Отдела образования и 40 школ (Django + React)</li>
            <li>Архитектура БД, REST API, JWT, Docker, Nginx, production-деплой</li>
            <li>Стек: React, TypeScript, Node.js, Express, Django, PostgreSQL, Docker</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
