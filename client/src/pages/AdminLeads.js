import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminLeads = () => {
  const [contacts, setContacts] = useState([]);
  const [demos, setDemos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('contacts');

  useEffect(() => {
    axios.get('http://localhost:5000/api/admin/leads')
      .then(res => { setContacts(res.data.contacts); setDemos(res.data.demos); })
      .catch(err => console.error('Error fetching leads:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="text-xl">Loading...</div></div>;

  const tabClass = (tab) => `py-2 px-1 border-b-2 font-medium text-sm ${activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`;

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard - Leads Management</h1>
        <div className="mb-6 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button onClick={() => setActiveTab('contacts')} className={tabClass('contacts')}>Contact Messages ({contacts.length})</button>
            <button onClick={() => setActiveTab('demos')} className={tabClass('demos')}>Demo Requests ({demos.length})</button>
          </nav>
        </div>

        {activeTab === 'contacts' && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>{['Name', 'Email', 'Phone', 'Message', 'Date'].map(h => <th key={h} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{h}</th>)}</tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {contacts.map(c => (
                  <tr key={c._id}>
                    <td className="px-6 py-4 whitespace-nowrap">{c.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{c.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{c.phone}</td>
                    <td className="px-6 py-4">{c.message.substring(0, 100)}...</td>
                    <td className="px-6 py-4 whitespace-nowrap">{new Date(c.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {contacts.length === 0 && <div className="text-center py-8 text-gray-500">No contact messages found</div>}
          </div>
        )}

        {activeTab === 'demos' && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>{['Name', 'Email', 'Company', 'Phone', 'Product', 'Date'].map(h => <th key={h} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{h}</th>)}</tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {demos.map(d => (
                  <tr key={d._id}>
                    <td className="px-6 py-4 whitespace-nowrap">{d.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{d.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{d.company}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{d.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap capitalize">{d.product.replace('-', ' ')}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{new Date(d.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {demos.length === 0 && <div className="text-center py-8 text-gray-500">No demo requests found</div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminLeads;
