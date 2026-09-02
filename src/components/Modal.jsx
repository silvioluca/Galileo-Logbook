import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ open, onClose, title, children, className = '' }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  // Portal su document.body: un Modal può essere invocato da qualsiasi punto
  // dell'albero (anche dentro una <tr>, dove un <div> annidato non sarebbe
  // HTML valido) e deve comunque comparire sopra a tutto, non dentro al
  // contenitore che lo ha aperto.
  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className={`modal-box etched-frame ${className}`} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <div className="modal-header">
          <h3>{title}</h3>
          <button type="button" className="modal-close" onClick={onClose} aria-label="Chiudi">
            ×
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>,
    document.body,
  );
}
