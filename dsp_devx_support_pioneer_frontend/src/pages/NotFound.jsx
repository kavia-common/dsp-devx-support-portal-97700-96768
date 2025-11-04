import React from 'react';
import Button from '../components/common/Button';

// PUBLIC_INTERFACE
export default function NotFound() {
  /** Fallback page for unknown routes */
  return (
    <div className="page">
      <h1 className="page-title">Page not found</h1>
      <p className="helper">The page you are looking for does not exist.</p>
      <Button onClick={() => window.location.assign('/')}>Go to Dashboard</Button>
    </div>
  );
}
