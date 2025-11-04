import React from 'react';
import { NavLink } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function Sidebar() {
  /** Sidebar navigation with sections. */
  const navClass = ({ isActive }) => `nav-item${isActive ? ' active' : ''}`;

  return (
    <aside className="app-sidebar">
      <div className="nav-group">Main</div>
      <nav className="nav-list">
        <NavLink to="/" className={navClass} end>🏠 Dashboard</NavLink>
        <NavLink to="/tickets" className={navClass}>🎫 Tickets</NavLink>
        <NavLink to="/knowledge" className={navClass}>📚 Knowledge Base</NavLink>
      </nav>

      <div className="nav-group">System</div>
      <nav className="nav-list">
        <NavLink to="/settings" className={navClass}>⚙️ Settings</NavLink>
      </nav>
    </aside>
  );
}
