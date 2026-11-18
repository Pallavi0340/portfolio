import { useState } from 'react';
import { SKILL_CATEGORIES, SKILLS_DATA } from '../data/portfolioData';
import { TechIcon } from './TechIcons';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills =
    selectedCategory === 'All'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header section-header--split">
          <div>
            <span className="section-kicker">Technical Stack</span>
            <h2 className="section-title">Technologies &amp; engineering skills</h2>
            <p className="section-subtitle">
              Tools, languages, and core computer science foundations I use to build
              dependable full-stack software.
            </p>
          </div>

          <div
            className="filter-tabs"
            role="tablist"
            aria-label="Filter skills by category"
          >
            {SKILL_CATEGORIES.map((category) => (
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

        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <article key={skill.id} className="skill-card">
              <div className="skill-card-head">
                <div className="skill-icon-box">
                  <TechIcon iconKey={skill.iconKey} size={22} />
                </div>
                <div className="skill-heading-group">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-category-text">{skill.category}</span>
                </div>
              </div>
              <p className="skill-focus">{skill.focus}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
