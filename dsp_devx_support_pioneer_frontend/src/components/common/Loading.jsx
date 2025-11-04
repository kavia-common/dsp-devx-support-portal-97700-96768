import React from 'react';

// PUBLIC_INTERFACE
export default function Loading({ label = 'Loading...' }) {
  /** Simple loading state indicator */
  return (
    <div className="loading" role="status" aria-live="polite">
      <span className="spinner" style={{ animation: 'spin 1s linear infinite' }}>⏳</span>
      {label}
      <style>{`@keyframes spin {from{transform:rotate(0)}to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}
