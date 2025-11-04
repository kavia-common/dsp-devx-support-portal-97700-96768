import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

// PUBLIC_INTERFACE
export default function Dashboard() {
  /** Dashboard landing with KPIs and quick links */
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button onClick={() => window.location.assign('/tickets/new')}>New Ticket</Button>
          <Button variant="secondary" onClick={() => window.location.assign('/knowledge')}>
            Browse Knowledge
          </Button>
        </div>
      </div>

      <div className="kpi">
        <Card title="Open Tickets">
          <div className="value">12</div>
          <div className="label">Awaiting response</div>
        </Card>
        <Card title="Avg. First Response">
          <div className="value">1.2h</div>
          <div className="label">Last 7 days</div>
        </Card>
        <Card title="SLA Met">
          <div className="value">98%</div>
          <div className="label">This month</div>
        </Card>
      </div>

      <div className="card-grid" style={{ marginTop: 16 }}>
        <div style={{ gridColumn: 'span 8' }}>
          <Card title="Recent Tickets">
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              <li>Build failing on pipeline for project X</li>
              <li>Access request to artifact repository</li>
              <li>Integration test flakiness investigation</li>
            </ul>
          </Card>
        </div>
        <div style={{ gridColumn: 'span 4' }}>
          <Card title="Quick Actions">
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <Button onClick={() => window.location.assign('/tickets')}>View Tickets</Button>
              <Button variant="secondary" onClick={() => window.location.assign('/settings')}>Settings</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
