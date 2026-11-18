import { useEffect, useState } from 'react';
import { ArrowUpRight, CheckCircle2, Code2, Layers, X } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [project]);

  useEffect(() => {
    if (!project) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="modal-panel modal-panel--project"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <div className="project-meta">
              <span>{project.category}</span>
            </div>
            <h3 id="project-modal-title" className="modal-title">
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            aria-label="Close project details"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-scroll-body">
          <div className="modal-media-frame">
            {!imageError ? (
              <img
                src={project.image}
                alt={`${project.title} detailed preview`}
                className="modal-project-img"
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="project-img-fallback">
                <Layers size={36} strokeWidth={1.6} aria-hidden="true" />
                <span>{project.title}</span>
              </div>
            )}
          </div>

          <p className="modal-summary">{project.summary}</p>

          <div className="modal-info-row">
            <div>
              <span className="modal-section-label">Key Outcome</span>
              <p className="modal-section-text">{project.metrics}</p>
            </div>
            <div>
              <span className="modal-section-label">Technologies</span>
              <p className="modal-section-text">{project.stack.join(' · ')}</p>
            </div>
          </div>

          <div className="modal-block">
            <span className="modal-section-label">Engineering Highlights</span>
            <ul className="modal-highlights-list">
              {project.highlights.map((item, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={16} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-block">
            <span className="modal-section-label">System Architecture</span>
            <p className="modal-section-text">{project.architecture}</p>
          </div>
        </div>

        <div className="modal-footer">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <Code2 size={16} aria-hidden="true" />
            <span>View Source on GitHub</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>

          <button type="button" className="btn-primary" onClick={onClose}>
            Done Reading
          </button>
        </div>
      </div>
    </div>
  );
}
