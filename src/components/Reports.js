// components/Reports.js - Reporting component
import React from 'react';

const Reports = ({ tickets, officers }) => {
  // Calculate some statistics for reporting
  const totalTickets = tickets.length;
  const totalRevenue = tickets
    .filter(ticket => ticket.status === 'paid')
    .reduce((sum, ticket) => sum + parseFloat(ticket.fineAmount), 0);
  
  const violationsByType = tickets.reduce((acc, ticket) => {
    acc[ticket.violationType] = (acc[ticket.violationType] || 0) + 1;
    return acc;
  }, {});

  const ticketsByOfficer = officers.map(officer => {
    const officerTickets = tickets.filter(ticket => ticket.officerId === officer.id);
    return {
      officer: officer.name,
      count: officerTickets.length,
      revenue: officerTickets
        .filter(ticket => ticket.status === 'paid')
        .reduce((sum, ticket) => sum + parseFloat(ticket.fineAmount), 0)
    };
  });

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Reports & Analytics</h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Summary Statistics</h3>
          <dl className="grid grid-cols-1 gap-4">
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded">
              <dt className="text-sm font-medium text-gray-500">Total Tickets Issued</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{totalTickets}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded">
              <dt className="text-sm font-medium text-gray-500">Total Revenue Collected</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${totalRevenue.toFixed(2)}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded">
              <dt className="text-sm font-medium text-gray-500">Payment Rate</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {((tickets.filter(t => t.status === 'paid').length / totalTickets) * 100).toFixed(1)}%
              </dd>
            </div>
          </dl>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Violations by Type</h3>
          <div className="space-y-3">
            {Object.entries(violationsByType).map(([type, count]) => (
              <div key={type} className="flex justify-between items-center">
                <span className="text-sm text-gray-600 capitalize">{type.replace('_', ' ')}</span>
                <span className="text-sm font-medium text-gray-900">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Officer Performance</h3>
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Officer</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Tickets Issued</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Revenue Generated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {ticketsByOfficer.map((item, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.officer}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.count}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${item.revenue.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Report Generation</h3>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Generate Full Report
          </button>
        </div>
        <p className="text-sm text-gray-600">
          Generate comprehensive reports for specific time periods, officers, or violation types.
          Reports can be exported in PDF or CSV format for further analysis.
        </p>
      </div>
    </div>
  );
};

export default Reports;