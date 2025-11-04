import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './router';
import TopNav from './components/Layout/TopNav';
import Sidebar from './components/Layout/Sidebar';
import Container from './components/Layout/Container';
import { getApiBaseUrl } from './config/env';

/**
 * PUBLIC_INTERFACE
 * App is the root component that applies theming and renders the global layout shell.
 */
function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  const apiBase = useMemo(() => getApiBaseUrl(), []);

  useEffect(() => {
    // visible to dev console for quick verification
    // eslint-disable-next-line no-console
    console.log('API base URL:', apiBase);
  }, [apiBase]);

  return (
    <BrowserRouter>
      <div className="app-shell">
        <TopNav theme={theme} onToggleTheme={toggleTheme} />
        <Sidebar />
        <Container>
          <Router />
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
