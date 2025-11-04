import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Tickets from './pages/Tickets';
import TicketDetail from './pages/TicketDetail';
import NewTicket from './pages/NewTicket';
import KnowledgeBase from './pages/KnowledgeBase';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

// PUBLIC_INTERFACE
export default function Router() {
  /** Renders application routes */
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/tickets/new" element={<NewTicket />} />
      <Route path="/tickets/:id" element={<TicketDetail />} />
      <Route path="/knowledge" element={<KnowledgeBase />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}
