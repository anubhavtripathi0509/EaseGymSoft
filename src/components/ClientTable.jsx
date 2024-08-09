import React, { useEffect, useState } from 'react';

const ClientTable = () => {
  const [clients, setClients] = useState([]);

  // Fetch all clients when the component mounts
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch('http://localhost:5000/clients');
        if (response.ok) {
          const data = await response.json();
          setClients(data);
        } else {
          console.error('Failed to fetch clients.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchClients();
  }, []);

  return (
    <div className="p-4 bg-blue-50 min-h-screen">
      <div className="bg-green-500 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-semibold">Client List</h2>
      </div>
      <div className="bg-white p-4 rounded-b-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-green-500" />
            <select className="border rounded px-3 py-2">
              <option>Show 10</option>
              {/* Add more options here */}
            </select>
            <select className="border rounded px-3 py-2">
              <option>--Select Gender--</option>
              {/* Add more options here */}
            </select>
            <select className="border rounded px-3 py-2">
              <option>--All Packages--</option>
              {/* Add more options here */}
            </select>
            <select className="border rounded px-3 py-2">
              <option>--All Membership--</option>
              {/* Add more options here */}
            </select>
            <select className="border rounded px-3 py-2">
              <option>--All Client Types--</option>
              {/* Add more options here */}
            </select>
          </div>
          <input 
            type="text" 
            className="border rounded px-3 py-2" 
            placeholder="Search" 
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-green-500 text-white">
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Client ID/Biometric ID</th>
                <th className="px-4 py-2 text-left">Photo</th>
                <th className="px-4 py-2 text-left">Client name</th>
                <th className="px-4 py-2 text-left">Number</th>
                <th className="px-4 py-2 text-left">Gender</th>
                <th className="px-4 py-2 text-left">Registration</th>
                <th className="px-4 py-2 text-left">Package</th>
                <th className="px-4 py-2 text-left">Expiration</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {clients.length > 0 ? (
                clients.map((client, index) => (
                  <tr key={client.invoice_id}>
                    <td className="px-4 py-2 text-center">{index + 1}</td>
                    <td className="px-4 py-2 text-center">{client.invoice_id}</td>
                    <td className="px-4 py-2 text-center">{/* Add client photo if available */}</td>
                    <td className="px-4 py-2 text-center">{client.client_name}</td>
                    <td className="px-4 py-2 text-center">{client.contact_number}</td>
                    <td className="px-4 py-2 text-center">{/* Client gender if applicable */}</td>
                    <td className="px-4 py-2 text-center">{client.joining_date}</td>
                    <td className="px-4 py-2 text-center">{client.package}</td>
                    <td className="px-4 py-2 text-center">{/* Add expiration date if applicable */}</td>
                    <td className="px-4 py-2 text-center">{/* Action buttons if needed */}</td>
                  </tr>
                ))
              ) : (
                <tr className="text-center">
                  <td className="px-4 py-2" colSpan="10">
                    No records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <button className="bg-black text-white py-2 px-4 rounded-full">BULK SMS</button>
          <div className="text-green-500">
            {/* Add pagination or other details here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTable;
