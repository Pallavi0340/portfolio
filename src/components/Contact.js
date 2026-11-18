import { useState } from 'react';
import {
  Check,
  Copy,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Send
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact({ nameInputRef }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitState, setSubmitState] = useState('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      nextErrors.message = 'Please share a short message (at least 10 characters).';
    }
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitState('submitting');
    window.setTimeout(() => {
      setSubmitState('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 450);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">Contact</span>
          <h2 className="section-title">Let&apos;s build something meaningful together.</h2>
          <p className="section-subtitle">
            Open to Software Engineer roles, full-stack internships, and collaborative
            open-source projects.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info-panel">
            <div className="contact-detail-list">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <Mail size={19} aria-hidden="true" />
                </div>
                <div className="contact-detail-content">
                  <span className="contact-detail-label">Email</span>
                  <div className="contact-email-row">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="contact-detail-value"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                    <button
                      type="button"
                      className="copy-email-btn"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                    >
                      {copiedEmail ? (
                        <>
                          <Check size={14} aria-hidden="true" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} aria-hidden="true" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <GraduationCap size={19} aria-hidden="true" />
                </div>
                <div className="contact-detail-content">
                  <span className="contact-detail-label">Education</span>
                  <span className="contact-detail-value">
                    {PERSONAL_INFO.college}
                  </span>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <MapPin size={19} aria-hidden="true" />
                </div>
                <div className="contact-detail-content">
                  <span className="contact-detail-label">Location</span>
                  <span className="contact-detail-value">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            <div className="contact-social-block">
              <span className="contact-detail-label">Developer Profiles</span>
              <div className="contact-social-links">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link-btn"
                >
                  <Github size={17} aria-hidden="true" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link-btn"
                >
                  <Linkedin size={17} aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form-card" onSubmit={handleSubmit} noValidate>
            {submitState === 'sent' ? (
              <div className="contact-success-box" role="status">
                <div className="contact-success-icon">
                  <Check size={22} aria-hidden="true" />
                </div>
                <h3>Message received</h3>
                <p>
                  Thank you for reaching out. Your message has been prepared for Pallavi,
                  and you can also email directly at {PERSONAL_INFO.email}.
                </p>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setSubmitState('idle')}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="form-grid-row">
                  <div className="form-field">
                    <label htmlFor="contact-name">Your Name</label>
                    <input
                      ref={nameInputRef}
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Aarav Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.name)}
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-email">Email Address</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.email)}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="Software Engineering Opportunity / Project Collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Share details about the role, team, or project..."
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="btn-primary btn-submit"
                  disabled={submitState === 'submitting'}
                >
                  <Send size={16} aria-hidden="true" />
                  <span>
                    {submitState === 'submitting' ? 'Sending Message...' : 'Send Message'}
                  </span>
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
