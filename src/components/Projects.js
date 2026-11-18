import { useState } from 'react';
import { ArrowUpRight, Code2, Eye, Layers } from 'lucide-react';
import { PROJECT_CATEGORIES, PROJECTS_DATA } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [failedImages, setFailedImages] = useState({});

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((project) => project.category === selectedCategory);

  const handleImageError = (projectId) => {
    setFailedImages((prev) => ({ ...prev, [projectId]: true }));
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header section-header--split">
          <div>
            <span className="section-kicker">Selected Work</span>
            <h2 className="section-title">Featured engineering projects</h2>
            <p className="section-subtitle">
              Full-stack web applications and algorithmic tools designed with clean APIs,
              structured databases, and responsive interfaces.
            </p>
          </div>

          <div
            className="filter-tabs"
            role="tablist"
            aria-label="Filter projects by type"
          >
            {PROJECT_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={selectedCategory === category}
                className={`filter-tab ${
                  selectedCategory === category ? 'filter-tab--active' : ''
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card">
              <div
                className="project-media"
                onClick={() => onSelectProject(project)}
                role="button"
                tabIndex={0}
                aria-label={`Inspect ${project.title} details`}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onSelectProject(project);
                  }
                }}
              >
                {!failedImages[project.id] ? (
                  <img
                    src={project.image}
                    alt={`${project.title} interface preview`}
                    className={`project-img ${
                      project.id === 'vital-drop' ? 'project-img--center' : ''
                    }`}
                    referrerPolicy="no-referrer"
                    onError={() => handleImageError(project.id)}
                  />
                ) : (
                  <div className="project-img-fallback">
                    <Layers size={32} strokeWidth={1.6} aria-hidden="true" />
                    <span>{project.title}</span>
                  </div>
                )}
              </div>

              <div className="project-body">
                <div className="project-meta">
                  <span>{project.category}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>

                <p className="project-stack-line">
                  {project.stack.join(' · ')}
                </p>

                <div className="project-actions">
                  <button
                    type="button"
                    className="btn-secondary btn-sm"
                    onClick={() => onSelectProject(project)}
                  >
                    <Eye size={15} aria-hidden="true" />
                    <span>Case Study</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-text"
                  >
                    <Code2 size={15} aria-hidden="true" />
                    <span>Source</span>
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
