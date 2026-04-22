import React, { useState } from 'react';
import { motion } from 'framer-motion';
import api from '../api';
import toast from 'react-hot-toast';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, title: 'Address', lines: ['AR tech solutions  ', 'joshimath'] },
  { icon: Phone, title: 'Phone', lines: ['+91 8979702574'] },
  { icon: Mail, title: 'Email', lines: ['info@artechsolution.com', 'sales@artechsolution.com'] },
  { icon: Clock, title: 'Business Hours', lines: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday - Sunday: Closed'] },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await api.post('/api/contact', formData);
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
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
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold mb-4">Contact Us</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team. We'd love to hear from you
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { label: 'Name', name: 'name', type: 'text' },
                  { label: 'Email', name: 'email', type: 'email' },
                  { label: 'Phone', name: 'phone', type: 'tel' },
                ].map(({ label, name, type }) => (
                  <div key={name}>
                    <label className="block text-gray-700 mb-2">{label} *</label>
                    <input type={type} name={name} value={formData[name]} onChange={handleChange} required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                ))}
                <div>
                  <label className="block text-gray-700 mb-2">Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows="6"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <button type="submit" disabled={submitting} className="w-full btn-primary disabled:opacity-50">
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map(({ icon: Icon, title, lines }) => (
                  <div key={title} className="flex items-start">
                    <Icon className="w-6 h-6 text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">{title}</h3>
                      {lines.map(line => <p key={line} className="text-gray-600">{line}</p>)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps?q=30.555806,79.562639&hl=en&z=14&output=embed"
                  width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
