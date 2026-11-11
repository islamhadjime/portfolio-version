export default function Workflow() {
  return (
    <section id="workflow">
      <h2>Как я работаю</h2>
      <div className="workflow-grid">
        <div className="glass-card workflow-card">
          <i className="fas fa-tasks"></i>
          <h3>Полный цикл</h3>
          <p>
            От архитектуры и UI до REST API, БД и production-деплоя.
            Чистый код, модульность, code-review, Git Flow и CI/CD.
          </p>
        </div>
        <div className="glass-card workflow-card">
          <i className="fas fa-rocket"></i>
          <h3>Результат в проде</h3>
          <p>
            Фокус на запуске: Mashar (20 магазинов / ~5K пользователей),
            KF21, Kvant Management (2 школы) и doska-oo (40 школ).
          </p>
        </div>
        <div className="glass-card workflow-card">
          <i className="fas fa-robot"></i>
          <h3>AI в работе</h3>
          <p>
            Использую ChatGPT / Copilot для шаблонов, рефакторинга, тестов и документации —
            ускоряет рутину, контроль качества остаётся за мной.
          </p>
        </div>
      </div>
    </section>
  );
}
