import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container-custom">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">AR tech solutions </h3>
          <p className="text-gray-400">Transform your business with smart digital solutions and hotel-tech innovations.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {['/', '/services', '/products', '/about'].map((path, i) => (
              <li key={path}><Link to={path} className="text-gray-400 hover:text-white">{['Home', 'Services', 'Products', 'About'][i]}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400">
            {['Digital Consulting', 'SEO Services', 'Digital Marketing', 'Google Ads'].map(s => <li key={s}>{s}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Email: info@artechsolution.com</li>
            <li>Phone: +91 8979702574</li>
            <li>upper market joshimath near PNB joshimath</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2024 ARtechSolutions. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
