import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTicket } from '../services/ticketsApi';
import Loading from '../components/common/Loading';
import ErrorState from '../components/common/ErrorState';
import Card from '../components/common/Card';

// PUBLIC_INTERFACE
export default function TicketDetail() {
  /** Ticket details page */
  const { id } = useParams();
  const [state, setState] = useState({ loading: true, error: null, ticket: null });

  const load = () => {
    setState((s) => ({ ...s, loading: true, error: null }));
    getTicket(id)
      .then((ticket) => setState({ loading: false, error: null, ticket }))
      .catch((e) => setState({ loading: false, error: e?.message || 'Failed to load', ticket: null }));
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="page">
      {state.loading && <Loading label="Loading ticket..." />}
      {!state.loading && state.error && <ErrorState message={state.error} onRetry={load} />}
      {!state.loading && !state.error && state.ticket && (
        <>
          <div className="page-header">
            <h1 className="page-title">{state.ticket.title}</h1>
          </div>
          <div className="card-grid">
            <div style={{ gridColumn: 'span 8' }}>
              <Card title="Description">
                <div style={{ whiteSpace: 'pre-wrap' }}>{state.ticket.description}</div>
              </Card>
            </div>
            <div style={{ gridColumn: 'span 4' }}>
              <Card title="Details">
                <div>Status: <strong>{state.ticket.status}</strong></div>
                <div>Priority: <strong>{state.ticket.priority || 'Normal'}</strong></div>
              </Card>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
