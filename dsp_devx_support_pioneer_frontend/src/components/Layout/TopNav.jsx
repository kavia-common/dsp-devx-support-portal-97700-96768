import React, { useEffect, useState } from 'react';
import { getHealth } from '../../services/healthApi';

// PUBLIC_INTERFACE
export default function TopNav({ theme, onToggleTheme }) {
  /** Top navigation bar with brand, health badge and theme toggle. */
  const [health, setHealth] = useState({ ok: false, message: 'Checking...' });

  useEffect(() => {
    let mounted = true;
    getHealth()
      .then((data) => {
        if (!mounted) return;
        const ok = !!data;
        setHealth({ ok, message: ok ? 'Backend healthy' : 'Unhealthy' });
      })
      .catch(() => {
        if (!mounted) return;
        setHealth({ ok: false, message: 'Unavailable' });
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <header className="app-topnav">
      <div className="brand">
        <span style={{ color: 'var(--color-primary)' }}>▮</span>
        <span>DSP DevX Support Pioneer</span>
        <span className="badge">Ocean Professional</span>
      </div>
      <div className="top-actions">
        <span className="health" aria-live="polite">
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 999,
              background: health.ok ? '#10B981' : '#EF4444',
              display: 'inline-block'
            }}
          />
          {health.message}
        </span>
        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          title="Toggle theme"
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
    </header>
  );
}
