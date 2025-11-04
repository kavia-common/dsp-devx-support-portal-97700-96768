import { apiGet } from './apiClient';

// PUBLIC_INTERFACE
export async function listArticles() {
  /** Returns a list of knowledge base articles */
  try {
    return await apiGet('/knowledge');
  } catch {
    return [
      { id: 'a-1', title: 'How to set up CI for monorepos', summary: 'Strategies for effective CI in monorepo environments.' },
      { id: 'a-2', title: 'Debugging flaky tests', summary: 'Approaches and tooling to identify and reduce test flakiness.' },
    ];
  }
}
