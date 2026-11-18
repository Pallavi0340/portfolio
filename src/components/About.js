import { Award, BookOpen, Compass, MapPin } from 'lucide-react';
import { ABOUT_PILLARS, PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">About Me</span>
          <h2 className="section-title">{PERSONAL_INFO.aboutHeading}</h2>
        </div>

        <div className="about-layout">
          <div className="about-story">
            {PERSONAL_INFO.aboutParagraphs.map((paragraph, index) => (
              <p key={index} className="about-paragraph">
                {paragraph}
              </p>
            ))}

            <div className="about-pillars">
              {ABOUT_PILLARS.map((pillar) => (
                <div key={pillar.id} className="about-pillar-item">
                  <h3 className="about-pillar-title">{pillar.title}</h3>
                  <p className="about-pillar-desc">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="about-profile-card" aria-label="Academic Profile">
            <div className="profile-card-top">
              <span className="profile-card-label">Academic Background</span>
              <h3 className="profile-card-college">{PERSONAL_INFO.college}</h3>
              <p className="profile-card-degree">
                {PERSONAL_INFO.degree} · {PERSONAL_INFO.year}
              </p>
            </div>

            <div className="profile-metrics-grid">
              <div className="profile-metric">
                <span className="profile-metric-label">
                  <Award size={15} aria-hidden="true" />
                  Academic CGPA
                </span>
                <strong className="profile-metric-value tabular-nums">
                  {PERSONAL_INFO.cgpa}
                </strong>
              </div>

              <div className="profile-metric">
                <span className="profile-metric-label">
                  <BookOpen size={15} aria-hidden="true" />
                  Specialization
                </span>
                <strong className="profile-metric-value">Full Stack &amp; DSA</strong>
              </div>

              <div className="profile-metric">
                <span className="profile-metric-label">
                  <MapPin size={15} aria-hidden="true" />
                  Location
                </span>
                <strong className="profile-metric-value">{PERSONAL_INFO.location}</strong>
              </div>

              <div className="profile-metric">
                <span className="profile-metric-label">
                  <Compass size={15} aria-hidden="true" />
                  Availability
                </span>
                <strong className="profile-metric-value">SDE Intern &amp; Full-Time</strong>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
