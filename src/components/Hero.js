import { useState } from 'react';
import { ArrowRight, Code2, Download, GraduationCap, Terminal } from 'lucide-react';
import { HERO_TECH_STACK, PERSONAL_INFO } from '../data/portfolioData';
import { TechIcon } from './TechIcons';

const HERO_ILLUSTRATION =
  '/src/assets/images/hero_developer_illustration_1795004630082.jpg';

export default function Hero({ onOpenResume }) {
  const [imageError, setImageError] = useState(false);

  const handleScrollToProjects = (event) => {
    event.preventDefault();
    const targetEl = document.getElementById('projects');
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-ambient-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <Terminal size={14} strokeWidth={2.2} aria-hidden="true" />
            <span>{PERSONAL_INFO.headlineBadge}</span>
          </div>

          <h1 className="hero-title">
            Hi, I&apos;m <span className="gradient-text">{PERSONAL_INFO.name}</span>
          </h1>

          <h2 className="hero-subtitle">{PERSONAL_INFO.heroSubtitle}</h2>

          <p className="hero-description">{PERSONAL_INFO.intro}</p>

          <div className="hero-cta-group">
            <a
              href="#projects"
              className="btn-primary"
              onClick={handleScrollToProjects}
            >
              <span>View My Work</span>
              <ArrowRight size={17} strokeWidth={2.1} aria-hidden="true" />
            </a>

            <button
              type="button"
              className="btn-secondary"
              onClick={onOpenResume}
            >
              <Download size={17} strokeWidth={2} aria-hidden="true" />
              <span>Download Resume</span>
            </button>
          </div>

          <div className="hero-tech-wrapper">
            <p className="hero-tech-label">Core Technologies</p>
            <ul className="hero-tech-list" aria-label="Core Technologies">
              {HERO_TECH_STACK.map((tech) => (
                <li key={tech.id} className="hero-tech-item" title={tech.name}>
                  <span className="hero-tech-icon">
                    <TechIcon iconKey={tech.id} size={18} />
                  </span>
                  <span className="hero-tech-name">{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-circle-stage">
            <div className="hero-circle-ring" aria-hidden="true" />
            <div className="hero-circle-backdrop" aria-hidden="true" />

            <div className="hero-illustration-frame">
              {!imageError ? (
                <img
                  src={HERO_ILLUSTRATION}
                  alt="Illustrated female software engineer coding on a laptop in purple lighting"
                  className="hero-illustration-img"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="hero-illustration-fallback">
                  <Code2 size={44} strokeWidth={1.6} />
                  <span>Full Stack Developer</span>
                </div>
              )}
            </div>

            <div className="floating-panel floating-panel--code" aria-hidden="true">
              <div className="floating-panel-header">
                <span className="window-controls">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="floating-filename">engineer.js</span>
              </div>
              <pre className="floating-code">
                <code>
                  <span className="code-kw">const</span> pallavi = {'{\n'}
                  {'  '}role: <span className="code-str">&quot;Full Stack Dev&quot;</span>,{'\n'}
                  {'  '}stack: [<span className="code-str">&quot;React&quot;</span>, <span className="code-str">&quot;Node&quot;</span>, <span className="code-str">&quot;C++&quot;</span>]{'\n'}
                  {'}'};
                </code>
              </pre>
            </div>

            <div className="floating-panel floating-panel--edu" aria-hidden="true">
              <div className="floating-edu-icon">
                <GraduationCap size={18} strokeWidth={2} />
              </div>
              <div className="floating-edu-copy">
                <strong>IET Lucknow</strong>
                <span>B.Tech CSE · 8.7 CGPA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
