import React from 'react';

// PUBLIC_INTERFACE
export default function Card({ title, children, footer, style }) {
  /** Generic card container */
  return (
    <section className="card" style={style}>
      {title && <div className="card-header">{title}</div>}
      <div>{children}</div>
      {footer && <div style={{ marginTop: 12 }}>{footer}</div>}
    </section>
  );
}
