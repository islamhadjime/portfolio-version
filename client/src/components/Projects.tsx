export default function Projects() {
  return (
    <section id="projects">
      <h2>Избранные проекты</h2>
      <div className="projects-grid">
        <div className="project-card glass-card">
          <i className="fas fa-graduation-cap project-icon"></i>
          <h3>DoshApp</h3>
          <p>Образовательная платформа с геймификацией, уроками и прогрессом. Fullstack на React + Django.</p>
          <a href="https://doshapp.ru/" target="_blank" className="project-link">doshapp.ru <i className="fas fa-external-link-alt"></i></a>
        </div>
        <div className="project-card glass-card">
          <i className="fas fa-chalkboard-user project-icon"></i>
          <h3>Kvant Management</h3>
          <p>Админ-панель для управления образовательными программами, аналитика и дашборды.</p>
          <a href="https://kvant-management-platform.vercel.app/" target="_blank" className="project-link">Демо <i className="fas fa-external-link-alt"></i></a>
        </div>
        <div className="project-card glass-card">
          <i className="fas fa-graduation-cap project-icon"></i>
          <h3>KF21</h3>
          <p>Образовательные учреждения Классы ФИЗТЕХ XXI (React, Redux-Toolkit, SCSS).</p>
          <a href="https://kf21.ru/" target="_blank" className="project-link">сайт <i className="fas fa-external-link-alt"></i></a>
        </div>
        <div className="project-card glass-card">
          <i className="fas fa-chalkboard-user project-icon"></i>
          <h3>Tax-Referent</h3>
          <p>Система анализа налоговых рисков (HTML/CSS/JS, Django, SQL).</p>
          <a href="https://hadjime.pythonanywhere.com" target="_blank" className="project-link">Демо <i className="fas fa-external-link-alt"></i></a>
        </div>
      </div>
    </section>
  );
}