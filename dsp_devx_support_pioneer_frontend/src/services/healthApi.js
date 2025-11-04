import { apiGet } from './apiClient';

// PUBLIC_INTERFACE
export async function getHealth() {
  /** Calls backend root for health status (expects any 200 response) */
  try {
    const data = await apiGet('/');
    return data ?? { ok: true };
  } catch (e) {
    if (e?.status === 404) return { ok: false };
    throw e;
  }
}
