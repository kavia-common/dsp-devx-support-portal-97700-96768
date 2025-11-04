import React from 'react';

// PUBLIC_INTERFACE
export default function Button({ children, variant = 'primary', ...props }) {
  /** A themed button component */
  return (
    <button className={`btn ${variant === 'secondary' ? 'secondary' : ''}`} {...props}>
      {children}
    </button>
  );
}
