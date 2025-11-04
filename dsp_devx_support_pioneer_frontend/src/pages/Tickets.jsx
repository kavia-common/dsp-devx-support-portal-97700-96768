import React, { useEffect, useState } from 'react';
import { listTickets } from '../services/ticketsApi';
import Loading from '../components/common/Loading';
import ErrorState from '../components/common/ErrorState';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function Tickets() {
  /** Tickets listing page */
  const [state, setState] = useState({ loading: true, error: null, items: [] });

  const load = () => {
    setState((s) => ({ ...s, loading: true, error: null }));
    listTickets()
      .then((items) => setState({ loading: false, error: null, items }))
      .catch((e) => setState({ loading: false, error: e?.message || 'Failed to load', items: [] }));
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Tickets</h1>
        <Button onClick={() => window.location.assign('/tickets/new')}>New Ticket</Button>
      </div>

      {state.loading && <Loading label="Loading tickets..." />}
      {!state.loading && state.error && (
        <ErrorState message={state.error} onRetry={load} />
      )}

      {!state.loading && !state.error && (
        <Card>
          {state.items.length === 0 ? (
            <div className="helper">No tickets yet. Create your first ticket.</div>
          ) : (
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {state.items.map((t) => (
                <li key={t.id}>
                  <Link to={`/tickets/${t.id}`}>{t.title}</Link>
                  <span style={{ color: 'var(--muted)' }}> — {t.status}</span>
                </li>
              ))}
            </ul>
          )}
        </Card>
      )}
    </div>
  );
}
