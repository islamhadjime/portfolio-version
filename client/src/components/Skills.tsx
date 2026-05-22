export default function Skills() {
  return (
    <section id="skills">
      <h2>Технологии</h2>
      <div className="skills-grid">
        <div className="skill-category glass-card">
          <i className="fas fa-code"></i>
          <h3>Frontend</h3>
          <div className="skill-tags">
            <span>React</span><span>TypeScript</span><span>Next.js</span><span>Redux Toolkit</span>
            <span>Zustand</span><span>React Native</span><span>SCSS</span><span>Tailwind</span>
          </div>
        </div>
        <div className="skill-category glass-card">
          <i className="fas fa-server"></i>
          <h3>Backend</h3>
          <div className="skill-tags">
            <span>Python/Django</span><span>DRF</span><span>Node.js</span><span>Express</span>
            <span>PostgreSQL</span><span>REST API</span><span>WebSocket</span><span>JWT</span>
          </div>
        </div>
        <div className="skill-category glass-card">
          <i className="fas fa-cloud-upload-alt"></i>
          <h3>DevOps & Tools</h3>
          <div className="skill-tags">
            <span>Docker</span><span>Nginx</span><span>CI/CD</span><span>Git</span>
            <span>Jest</span><span>Storybook</span><span>VPS</span><span>Webpack</span>
          </div>
        </div>
      </div>
    </section>
  );
}