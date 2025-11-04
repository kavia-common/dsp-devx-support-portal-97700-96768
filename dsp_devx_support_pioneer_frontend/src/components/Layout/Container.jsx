import React from 'react';

// PUBLIC_INTERFACE
export default function Container({ children }) {
  /** Main content container area */
  return <main className="app-content">{children}</main>;
}
