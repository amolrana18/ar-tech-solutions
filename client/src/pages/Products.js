import React, { useState } from 'react';
import { motion } from 'framer-motion';
import api from '../api';
import toast from 'react-hot-toast';
import { Hotel, Link2, Check, X } from 'lucide-react';

const features = [
  { feature: 'Direct Bookings', bookingEngine: true, channelManager: false },
  { feature: 'Multi-Platform Sync', bookingEngine: false, channelManager: true },
  { feature: 'Real-time Availability', bookingEngine: true, channelManager: true },
  { feature: 'Rate Management', bookingEngine: true, channelManager: true },
  { feature: 'Zero Commission', bookingEngine: true, channelManager: false },
  { feature: 'Inventory Control', bookingEngine: false, channelManager: true },
  { feature: 'Payment Gateway', bookingEngine: true, channelManager: false },
  { feature: 'Analytics Dashboard', bookingEngine: true, channelManager: true },
];

const Products = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', product: 'both', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await api.post('/api/demo', formData);
      toast.success('Demo request submitted successfully!');
      setFormData({ name: '', email: '', company: '', phone: '', product: 'both', message: '' });
    } catch {
      toast.error('Submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container-custom text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold mb-4">Our Products</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful hotel-tech solutions to maximize your revenue and streamline operations
          </motion.p>
        </div>
      </section>

      {/* Booking Engine */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Hotel className="w-16 h-16 text-primary mb-4" />
              <h2 className="text-3xl font-bold mb-4">Booking Engine</h2>
              <p className="text-gray-600 mb-6">Our commission-free booking engine helps you drive direct bookings and increase revenue. Fully customizable and mobile-responsive.</p>
              <ul className="space-y-3 mb-8">
                {['Zero commission on bookings', 'Real-time availability and pricing', 'Secure payment integration', 'Mobile-responsive design', 'Multi-language support'].map(item => (
                  <li key={item} className="flex items-center"><Check className="w-5 h-5 text-primary mr-2" />{item}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
              <div className="space-y-4">
                {[
                  { title: 'Increase Direct Bookings', desc: 'Reduce dependency on OTAs and save on commission fees' },
                  { title: 'Enhance Guest Experience', desc: 'Provide a smooth, intuitive booking process' },
                  { title: 'Boost Revenue', desc: 'Implement upselling and cross-selling features' },
                ].map(b => (
                  <div key={b.title}>
                    <h4 className="font-semibold mb-1">{b.title}</h4>
                    <p className="text-gray-600">{b.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Channel Manager */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="order-2 lg:order-1">
              <Link2 className="w-16 h-16 text-primary mb-4" />
              <h2 className="text-3xl font-bold mb-4">Channel Manager</h2>
              <p className="text-gray-600 mb-6">Sync your rates and inventory across all booking channels in real-time. Eliminate overbookings and manage everything from a single dashboard.</p>
              <ul className="space-y-3 mb-8">
                {['Multi-platform integration', 'Real-time synchronization', 'Rate and inventory management', 'Automatic updates', 'Centralized control'].map(item => (
                  <li key={item} className="flex items-center"><Check className="w-5 h-5 text-primary mr-2" />{item}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="bg-white rounded-2xl p-8 order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4">Connected Platforms</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Booking.com', 'Expedia', 'Agoda', 'Airbnb'].map(p => (
                  <div key={p} className="bg-gray-100 p-3 rounded text-center">{p}</div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Feature Comparison</h2>
            <p className="text-gray-600">See how our products compare</p>
          </motion.div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center">Booking Engine</th>
                  <th className="p-4 text-center">Channel Manager</th>
                </tr>
              </thead>
              <tbody>
                {features.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 border">{item.feature}</td>
                    <td className="p-4 text-center border">{item.bookingEngine ? <Check className="w-5 h-5 text-green-500 inline" /> : <X className="w-5 h-5 text-red-500 inline" />}</td>
                    <td className="p-4 text-center border">{item.channelManager ? <Check className="w-5 h-5 text-green-500 inline" /> : <X className="w-5 h-5 text-red-500 inline" />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Demo Form */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Request a Demo</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { label: 'Name', name: 'name', type: 'text' },
                { label: 'Email', name: 'email', type: 'email' },
                { label: 'Company', name: 'company', type: 'text' },
                { label: 'Phone', name: 'phone', type: 'tel' },
              ].map(({ label, name, type }) => (
                <div key={name}>
                  <label className="block text-gray-700 mb-2">{label} *</label>
                  <input type={type} name={name} value={formData[name]} onChange={handleChange} required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              ))}
              <div>
                <label className="block text-gray-700 mb-2">Product Interest *</label>
                <select name="product" value={formData.product} onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="booking-engine">Booking Engine</option>
                  <option value="channel-manager">Channel Manager</option>
                  <option value="both">Both</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Additional Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <button type="submit" disabled={submitting} className="w-full btn-primary disabled:opacity-50">
                {submitting ? 'Submitting...' : 'Request Demo'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
