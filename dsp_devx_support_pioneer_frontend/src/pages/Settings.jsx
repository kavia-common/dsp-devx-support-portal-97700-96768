import React from 'react';
import Card from '../components/common/Card';
import { getApiBaseUrl } from '../config/env';

// PUBLIC_INTERFACE
export default function Settings() {
  /** Settings page showing environment-driven config */
  const apiBase = getApiBaseUrl();

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Settings</h1>
      </div>
      <div className="card-grid">
        <div style={{ gridColumn: 'span 6' }}>
          <Card title="Environment">
            <div>API Base URL:</div>
            <code>{apiBase}</code>
          </Card>
        </div>
        <div style={{ gridColumn: 'span 6' }}>
          <Card title="Theme">
            <div>
              The Ocean Professional theme applies a clean, modern look with blue primary accents and amber secondary highlights.
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
