import React, { useEffect, useState } from 'react';
import { listArticles } from '../services/kbApi';
import Loading from '../components/common/Loading';
import ErrorState from '../components/common/ErrorState';
import Card from '../components/common/Card';

// PUBLIC_INTERFACE
export default function KnowledgeBase() {
  /** Knowledge base list view */
  const [state, setState] = useState({ loading: true, error: null, items: [] });

  const load = () => {
    setState((s) => ({ ...s, loading: true, error: null }));
    listArticles()
      .then((items) => setState({ loading: false, error: null, items }))
      .catch((e) => setState({ loading: false, error: e?.message || 'Failed to load', items: [] }));
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Knowledge Base</h1>
      </div>

      {state.loading && <Loading label="Loading articles..." />}
      {!state.loading && state.error && <ErrorState message={state.error} onRetry={load} />}

      {!state.loading && !state.error && (
        <div className="card-grid">
          {state.items.map((a) => (
            <div key={a.id} style={{ gridColumn: 'span 6' }}>
              <Card title={a.title}>
                <div style={{ color: 'var(--muted)' }}>{a.summary}</div>
              </Card>
            </div>
          ))}
          {state.items.length === 0 && <Card>No articles available.</Card>}
        </div>
      )}
    </div>
  );
}
