import React, { useState } from 'react';
import { Input, TextArea } from '../components/common/Input';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { createTicket } from '../services/ticketsApi';

// PUBLIC_INTERFACE
export default function NewTicket() {
  /** Create ticket page with basic validation */
  const [form, setForm] = useState({ title: '', description: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = 'Title is required';
    if (form.description.trim().length < 10) e.description = 'Description must be at least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    setSubmitError('');
    if (!validate()) return;
    try {
      setSubmitting(true);
      const created = await createTicket(form);
      if (created?.id) {
        window.location.assign(`/tickets/${created.id}`);
      } else {
        window.location.assign('/tickets');
      }
    } catch (e) {
      setSubmitError(e?.message || 'Failed to create ticket');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">New Ticket</h1>
      </div>
      <form onSubmit={onSubmit}>
        <div className="card-grid">
          <div style={{ gridColumn: 'span 8' }}>
            <Card title="Details">
              <Input
                label="Title"
                value={form.title}
                error={errors.title}
                onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                placeholder="Brief summary of the issue"
              />
              <TextArea
                label="Description"
                value={form.description}
                error={errors.description}
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                placeholder="Describe the problem, steps to reproduce, expected behavior..."
                rows={8}
              />
              {submitError && <div className="error" style={{ marginBottom: 10 }}>{submitError}</div>}
              <Button type="submit" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Create Ticket'}
              </Button>
            </Card>
          </div>
          <div style={{ gridColumn: 'span 4' }}>
            <Card title="Tips">
              <ul style={{ margin: 0, paddingLeft: 16 }}>
                <li>Provide logs and steps to reproduce.</li>
                <li>Mention affected pipelines or services.</li>
                <li>Include urgency if it impacts releases.</li>
              </ul>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}
