import { getApiBaseUrl } from '../config/env';

/**
 * Simple API client built on fetch with JSON handling and error propagation.
 */
function buildUrl(path) {
  const base = getApiBaseUrl().replace(/\/+$/, '');
  const p = String(path || '').replace(/^\/+/, '');
  return `${base}/${p}`;
}

async function handleResponse(res) {
  const contentType = res.headers.get('content-type') || '';
  const isJSON = contentType.includes('application/json');
  const data = isJSON ? await res.json().catch(() => ({})) : await res.text();
  if (!res.ok) {
    const message = (isJSON ? data?.detail : data) || `HTTP ${res.status}`;
    const err = new Error(message);
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

// PUBLIC_INTERFACE
export async function apiGet(path) {
  /** Performs a GET request */
  const res = await fetch(buildUrl(path), { credentials: 'include' });
  return handleResponse(res);
}

// PUBLIC_INTERFACE
export async function apiPost(path, body) {
  /** Performs a POST request with JSON body */
  const res = await fetch(buildUrl(path), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(body || {})
  });
  return handleResponse(res);
}
