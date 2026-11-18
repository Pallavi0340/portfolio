import { Award, BookOpen, Calendar, GraduationCap } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export default function Education() {
  const primaryEducation = EDUCATION_DATA.find((item) => item.isPrimary);
  const secondaryEducation = EDUCATION_DATA.filter((item) => !item.isPrimary);

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">Academic Background</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Academic foundation in computer science engineering and schooling.
          </p>
        </div>

        <div className="education-timeline">
          {primaryEducation && (
            <article className="education-node education-node--primary">
              <div className="education-marker education-marker--primary" aria-hidden="true">
                <GraduationCap size={20} strokeWidth={2} />
              </div>

              <div className="education-card education-card--primary">
                <div className="education-card-top">
                  <div className="education-meta">
                    <span>{primaryEducation.level}</span>
                    <span aria-hidden="true">·</span>
                    <span className="education-duration tabular-nums">
                      <Calendar size={13} aria-hidden="true" />
                      {primaryEducation.period}
                    </span>
                  </div>

                  <div className="education-score education-score--primary">
                    <span className="education-score-label">{primaryEducation.scoreLabel}</span>
                    <strong className="education-score-value tabular-nums">
                      {primaryEducation.scoreValue}
                    </strong>
                  </div>
                </div>

                <h3 className="education-institution education-institution--primary">
                  {primaryEducation.institution}
                </h3>

                <p className="education-degree">{primaryEducation.qualification}</p>
                {primaryEducation.branch && (
                  <p className="education-branch">{primaryEducation.branch}</p>
                )}
              </div>
            </article>
          )}

          <div className="education-secondary-list">
            {secondaryEducation.map((item, index) => (
              <article key={item.id} className="education-node education-node--secondary">
                <div className="education-marker education-marker--secondary" aria-hidden="true">
                  {index === 0 ? (
                    <BookOpen size={17} strokeWidth={1.9} />
                  ) : (
                    <Award size={17} strokeWidth={1.9} />
                  )}
                </div>

                <div className="education-card education-card--secondary">
                  <div className="education-card-top">
                    <div className="education-meta">
                      <span>{item.level}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{item.period}</span>
                    </div>

                    <div className="education-score education-score--secondary">
                      <span className="education-score-label">{item.scoreLabel}</span>
                      <strong className="education-score-value tabular-nums">
                        {item.scoreValue}
                      </strong>
                    </div>
                  </div>

                  <h3 className="education-institution">{item.institution}</h3>
                  <p className="education-qualification">{item.qualification}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
