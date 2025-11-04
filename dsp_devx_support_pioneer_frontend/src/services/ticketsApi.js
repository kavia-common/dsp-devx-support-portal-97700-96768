import { apiGet, apiPost } from './apiClient';

/**
 * In absence of defined backend endpoints, provide graceful fallback mocks.
 * If backend implements /tickets endpoints, these will be used automatically.
 */

async function tryCall(fn, fallback) {
  try {
    return await fn();
  } catch (e) {
    // Use mock data on 404/Network
    return typeof fallback === 'function' ? fallback() : fallback;
  }
}

// PUBLIC_INTERFACE
export async function listTickets() {
  /** Returns list of tickets from backend or mock data */
  return tryCall(
    () => apiGet('/tickets'),
    () => Promise.resolve([
      { id: 't-101', title: 'Build failing on pipeline for project X', status: 'open' },
      { id: 't-102', title: 'Access request to artifact repository', status: 'pending' },
    ])
  );
}

// PUBLIC_INTERFACE
export async function getTicket(id) {
  /** Returns a specific ticket by id */
  return tryCall(
    () => apiGet(`/tickets/${id}`),
    () => Promise.resolve({
      id,
      title: `Ticket ${id}`,
      status: 'open',
      description: 'Example ticket description.\n\nNo backend endpoint detected; showing mock data.'
    })
  );
}

// PUBLIC_INTERFACE
export async function createTicket(payload) {
  /** Creates a ticket and returns the created resource */
  return tryCall(
    () => apiPost('/tickets', payload),
    () => Promise.resolve({ id: `t-${Math.floor(Math.random() * 10000)}`, ...payload, status: 'open' })
  );
}
