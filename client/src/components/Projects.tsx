import { useState } from 'react';
import {
  projects,
  categoryLabels,
  getProjectThumbnail,
  type Project,
  type ProjectCategory,
} from '../data/projects';
import ProjectModal from './ProjectModal';

const categories: ProjectCategory[] = ['all', 'dosh', 'kf21', 'frelance'];

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  const openProject = (project: Project) => {
    setActiveProject(project);
    setImageIndex(0);
  };

  const closeProject = () => setActiveProject(null);

  return (
    <>
      {activeProject && (
        <ProjectModal
          project={activeProject}
          imageIndex={imageIndex}
          onClose={closeProject}
          onImageChange={setImageIndex}
        />
      )}

      <section id="projects">
        <h2>Избранные проекты</h2>

        <div className="projects-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`projects-filter-btn${filter === cat ? ' active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project) => (
            <button
              key={project.id}
              className="project-card glass-card"
              onClick={() => openProject(project)}
              type="button"
            >
              <div className="project-card-image">
                <img src={getProjectThumbnail(project)} alt={project.title} loading="lazy" />
                <span className="project-card-overlay">
                  <i className="fas fa-expand" /> Подробнее
                </span>
              </div>
              <div className="project-card-body">
                <span className="project-card-category">{categoryLabels[project.category]}</span>
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
                <div className="project-card-stack">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                  {project.stack.length > 4 && <span>+{project.stack.length - 4}</span>}
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
