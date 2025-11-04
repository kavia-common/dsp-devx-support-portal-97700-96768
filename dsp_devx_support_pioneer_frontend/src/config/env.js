const DEFAULT_API = 'http://localhost:3001';

// PUBLIC_INTERFACE
export function getApiBaseUrl() {
  /** Returns API base URL derived from environment or default */
  const fromEnv = process.env.REACT_APP_API_BASE_URL;
  return (fromEnv && fromEnv.trim()) ? fromEnv.trim() : DEFAULT_API;
}
