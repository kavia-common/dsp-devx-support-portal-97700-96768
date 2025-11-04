import React from 'react';

// PUBLIC_INTERFACE
export function Input({ label, error, helperText, ...props }) {
  /** A text input with label and error display */
  return (
    <div style={{ marginBottom: 12 }}>
      {label && <label style={{ display: 'block', marginBottom: 6 }}>{label}</label>}
      <input className="input" {...props} />
      {helperText && !error && <div className="helper">{helperText}</div>}
      {error && <div className="error">{error}</div>}
    </div>
  );
}

// PUBLIC_INTERFACE
export function TextArea({ label, error, helperText, ...props }) {
  /** A textarea with label and error display */
  return (
    <div style={{ marginBottom: 12 }}>
      {label && <label style={{ display: 'block', marginBottom: 6 }}>{label}</label>}
      <textarea className="textarea" {...props} />
      {helperText && !error && <div className="helper">{helperText}</div>}
      {error && <div className="error">{error}</div>}
    </div>
  );
}
