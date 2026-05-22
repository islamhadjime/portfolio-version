export default function Workflow() {
  return (
    <section id="workflow">
      <h2>Как я работаю</h2>
      <div className="workflow-grid">
        <div className="glass-card workflow-card">
          <i className="fas fa-tasks"></i>
          <h3>Подход к задачам</h3>
          <p>Чистый код, модульность, тестирование (Jest, RTL). Планирую задачи, разбиваю на этапы, использую Git Flow и CI/CD.</p>
        </div>
        <div className="glass-card workflow-card">
          <i className="fas fa-robot"></i>
          <h3>AI в работе</h3>
          <p>Использую ChatGPT/GitHub Copilot для генерации шаблонов, рефакторинга, написания тестов и документации. Ускоряет разработку на 30%.</p>
        </div>
      </div>
    </section>
  );
}