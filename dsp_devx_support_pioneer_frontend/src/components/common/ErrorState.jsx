import React from 'react';
import Button from './Button';

// PUBLIC_INTERFACE
export default function ErrorState({ title = 'Something went wrong', message, onRetry }) {
  /** Displays an error block with retry */
  return (
    <div className="card" role="alert" style={{ borderColor: 'rgba(239,68,68,0.35)' }}>
      <div className="card-header" style={{ color: 'var(--color-error)' }}>{title}</div>
      {message && <div style={{ marginBottom: 12, color: 'var(--muted)' }}>{message}</div>}
      {onRetry && <Button onClick={onRetry}>Retry</Button>}
    </div>
  );
}
