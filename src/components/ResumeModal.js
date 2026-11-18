import { useEffect } from 'react';
import { Download, ExternalLink, FileText, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return undefined;

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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={onClose}
    >
      <div
        className="modal-panel modal-panel--resume"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <span className="modal-section-label">Curriculum Vitae</span>
            <h3 id="resume-modal-title" className="modal-title">
              Pallavi — Resume (PDF)
            </h3>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            aria-label="Close resume preview"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-scroll-body">
          <object
            data={`${PERSONAL_INFO.resumeUrl}#view=FitH`}
            type="application/pdf"
            className="resume-pdf-frame"
            aria-label="Pallavi Resume PDF Preview"
          >
            <div className="resume-pdf-fallback">
              <FileText size={36} strokeWidth={1.6} aria-hidden="true" />
              <p>
                Inline PDF preview is unavailable in this browser. You can download
                or open Pallavi&apos;s resume directly below.
              </p>
              <a
                href={PERSONAL_INFO.resumeUrl}
                download={PERSONAL_INFO.resumeFileName}
                className="btn-primary"
              >
                <Download size={16} aria-hidden="true" />
                <span>Download Resume PDF</span>
              </a>
            </div>
          </object>
        </div>

        <div className="modal-footer">
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <ExternalLink size={16} aria-hidden="true" />
            <span>Open PDF</span>
          </a>

          <a
            href={PERSONAL_INFO.resumeUrl}
            download={PERSONAL_INFO.resumeFileName}
            className="btn-primary"
          >
            <Download size={16} aria-hidden="true" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
}
