// App.js - Main application component
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import TicketManagement from './components/TicketManagement';
import OfficerManagement from './components/OfficerManagement'; // Fixed typo
import Reports from './components/Reports';
import Login from './components/Login';
import { mockTickets, mockOfficers } from './data/mockData';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Fixed variable name
  const [tickets, setTickets] = useState([]); // Fixed initialization
  const [officers, setOfficers] = useState([]); // Fixed initialization
  const [user, setUser] = useState(null);

  useEffect(() => {
    // In a real app, this would fetch data from Firebase
    setTickets(mockTickets);
    setOfficers(mockOfficers);
  }, []);

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const addTicket = (ticket) => {
    const newTicket = {
      ...ticket,
      id: `T${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'issued'
    };
    setTickets([...tickets, newTicket]);
    
    // In a real app, this would save to Firebase
    console.log('Saving ticket to database:', newTicket);
  };

  const updateTicket = (ticketId, updates) => {
    const updatedTickets = tickets.map(ticket => 
      ticket.id === ticketId ? { ...ticket, ...updates } : ticket
    );
    setTickets(updatedTickets);
    
    // In a real app, this would update in Firebase
    console.log('Updating ticket in database:', ticketId, updates);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={user} onLogout={handleLogout} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4">
          {currentView === 'dashboard' && (
            <Dashboard tickets={tickets} officers={officers} />
          )}
          {currentView === 'tickets' && (
            <TicketManagement 
              tickets={tickets} 
              officers={officers}
              onAddTicket={addTicket}
              onUpdateTicket={updateTicket}
            />
          )}
          {currentView === 'officers' && (
            <OfficerManagement officers={officers} />
          )}
          {currentView === 'reports' && (
            <Reports tickets={tickets} officers={officers} />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;