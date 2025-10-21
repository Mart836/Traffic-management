// components/Sidebar.js - Navigation sidebar
import React from 'react';

const Sidebar = ({ currentView, setCurrentView }) => {
  const navigation = [
    { name: 'Dashboard', id: 'dashboard', icon: 'home' },
    { name: 'Ticket Management', id: 'tickets', icon: 'ticket' },
    { name: 'Officer Management', id: 'officers', icon: 'users' },
    { name: 'Reports', id: 'reports', icon: 'chart-bar' },
  ];

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1 bg-gray-800">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <span className="text-white text-lg font-semibold">TMS</span>
            </div>
            <nav className="mt-5 flex-1 px-2 bg-gray-800 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentView(item.id)}
                  className={`${
                    currentView === item.id
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  } group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full text-left`}
                >
                  <span className="flex-1">{item.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;