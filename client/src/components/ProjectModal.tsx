import { useEffect, useCallback } from 'react';
import { assetUrl } from '../data/projects';
import type { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project;
  imageIndex: number;
  onClose: () => void;
  onImageChange: (index: number) => void;
}

export default function ProjectModal({
  project,
  imageIndex, 
  onClose,
  onImageChange,
}: ProjectModalProps) {
  const total = project.images.length;
  const current = ((imageIndex % total) + total) % total;

  const goPrev = useCallback(() => onImageChange(current - 1), [current, onImageChange]);
  const goNext = useCallback(() => onImageChange(current + 1), [current, onImageChange]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, goPrev, goNext]);

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        <button className="project-modal-close" onClick={onClose} aria-label="Закрыть">
          <i className="fas fa-times" />
        </button>

        <div className="project-modal-gallery">
          <div className="project-modal-image-wrap">
            {total > 1 && (
              <button className="project-modal-nav project-modal-nav--prev" onClick={goPrev} aria-label="Предыдущее">
                <i className="fas fa-chevron-left" />
              </button>
            )}
            <img
              src={assetUrl(project.images[current])}
              alt={`${project.title} — скриншот ${current + 1}`}
              className="project-modal-image"
            />
            {total > 1 && (
              <button className="project-modal-nav project-modal-nav--next" onClick={goNext} aria-label="Следующее">
                <i className="fas fa-chevron-right" />
              </button>
            )}
            {total > 1 && (
              <span className="project-modal-counter">
                {current + 1} / {total}
              </span>
            )}
          </div>

          {total > 1 && (
            <div className="project-modal-thumbs">
              {project.images.map((img, i) => (
                <button
                  key={img}
                  className={`project-modal-thumb${i === current ? ' active' : ''}`}
                  onClick={() => onImageChange(i)}
                  aria-label={`Скриншот ${i + 1}`}
                >
                  <img src={assetUrl(img)} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="project-modal-info">
          <div className="project-modal-header">
            <span className="project-modal-category">{project.subtitle}</span>
            <h3>{project.title}</h3>
            {project.period && <span className="project-modal-period">{project.period}</span>}
          </div>

          <p className="project-modal-role">{project.role}</p>
          <p className="project-modal-desc">{project.description}</p>

          <div className="project-modal-section">
            <h4>Что сделал</h4>
            <ul>
              {project.achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="project-modal-section">
            <h4>Стек</h4>
            <div className="project-modal-stack">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>

          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-modal-link">
              {project.linkLabel ?? 'Открыть проект'} <i className="fas fa-external-link-alt" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
