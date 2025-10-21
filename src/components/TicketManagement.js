// components/TicketManagement.js - Ticket creation and management
import React, { useState } from 'react';

const TicketManagement = ({ tickets, officers, onAddTicket, onUpdateTicket }) => {
  const [showForm, setShowForm] = useState(false);
  const [newTicket, setNewTicket] = useState({
    licensePlate: '',
    violationType: '',
    location: '',
    officerId: '',
    fineAmount: '',
    notes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTicket({
      ...newTicket,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTicket(newTicket);
    setNewTicket({
      licensePlate: '',
      violationType: '',
      location: '',
      officerId: '',
      fineAmount: '',
      notes: ''
    });
    setShowForm(false);
  };

  const handleStatusUpdate = (ticketId, newStatus) => {
    onUpdateTicket(ticketId, { status: newStatus });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Ticket Management</h2>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={() => setShowForm(true)}
        >
          Create New Ticket
        </button>
      </div>

      {showForm && (
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Create New Traffic Ticket</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="licensePlate" className="block text-sm font-medium text-gray-700">
                  License Plate
                </label>
                <input
                  type="text"
                  name="licensePlate"
                  id="licensePlate"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={newTicket.licensePlate}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="violationType" className="block text-sm font-medium text-gray-700">
                  Violation Type
                </label>
                <select
                  id="violationType"
                  name="violationType"
                  required
                  className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={newTicket.violationType}
                  onChange={handleInputChange}
                >
                  <option value="">Select a violation</option>
                  <option value="speeding">Speeding</option>
                  <option value="red_light">Red Light Violation</option>
                  <option value="illegal_parking">Illegal Parking</option>
                  <option value="seat_belt">Seat Belt Violation</option>
                  <option value="dui">DUI</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={newTicket.location}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="officerId" className="block text-sm font-medium text-gray-700">
                  Issuing Officer
                </label>
                <select
                  id="officerId"
                  name="officerId"
                  required
                  className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={newTicket.officerId}
                  onChange={handleInputChange}
                >
                  <option value="">Select an officer</option>
                  {officers.map(officer => (
                    <option key={officer.id} value={officer.id}>
                      {officer.name} ({officer.badgeNumber})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="fineAmount" className="block text-sm font-medium text-gray-700">
                  Fine Amount
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">N$</span>
                  </div>
                  <input
                    type="number"
                    name="fineAmount"
                    id="fineAmount"
                    min="0"
                    step="0.01"
                    required
                    className="block w-full pl-7 pr-12 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="0.00"
                    value={newTicket.fineAmount}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                Additional Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={newTicket.notes}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Create Ticket
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">All Tickets</h3>
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Ticket ID</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">License Plate</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Violation</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Officer</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Fine</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {tickets.map((ticket) => (
                  <tr key={ticket.id}>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{ticket.id}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{ticket.licensePlate}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{ticket.violationType}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {officers.find(o => o.id === ticket.officerId)?.name || 'Unknown'}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">N${ticket.fineAmount}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                        ticket.status === 'issued' ? 'bg-yellow-100 text-yellow-800' :
                        ticket.status === 'paid' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {ticket.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div className="flex space-x-2">
                        {ticket.status === 'issued' && (
                          <>
                            <button
                              onClick={() => handleStatusUpdate(ticket.id, 'paid')}
                              className="text-green-600 hover:text-green-900"
                            >
                              Mark Paid
                            </button>
                            <button
                              onClick={() => handleStatusUpdate(ticket.id, 'contested')}
                              className="text-red-600 hover:text-red-900"
                            >
                              Mark Contested
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketManagement;