import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Megaphone, TrendingUp, BarChart3, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: BarChart3, title: 'Digital Consulting',
    description: 'Strategic digital transformation consulting to help your business thrive in the digital age.',
    benefits: ['Digital strategy development', 'Technology stack assessment', 'Process optimization', 'ROI analysis and tracking']
  },
  {
    icon: Search, title: 'SEO Services',
    description: 'Data-driven SEO strategies to improve your search engine rankings and drive organic traffic.',
    benefits: ['Keyword research and optimization', 'On-page and off-page SEO', 'Technical SEO audit', 'Monthly performance reports']
  },
  {
    icon: Megaphone, title: 'Digital Marketing',
    description: 'Integrated digital marketing campaigns across multiple channels to reach your target audience.',
    benefits: ['Social media marketing', 'Content marketing', 'Email marketing campaigns', 'Marketing automation']
  },
  {
    icon: TrendingUp, title: 'Google Ads Management',
    description: 'Expert Google Ads management to maximize your ROI and reach potential customers.',
    benefits: ['PPC campaign setup', 'Keyword bidding strategy', 'A/B testing optimization', 'Conversion tracking']
  }
];

const Services = () => (
  <div className="pt-20">
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container-custom text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold mb-4">Our Services</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-600 max-w-2xl mx-auto">
          Comprehensive digital solutions tailored to your business needs
        </motion.p>
      </div>
    </section>

    {services.map((service, index) => (
      <section key={index} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <service.icon className="w-20 h-20 text-primary mb-6" />
              <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-600 text-lg mb-6">{service.description}</p>
              <div className="space-y-3 mb-8">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-primary inline-block">Get Started →</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Our {service.title}?</h3>
              <ul className="space-y-3">
                {['Industry expertise', 'Data-driven approach', 'Proven track record', 'Dedicated support team'].map(item => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    ))}

    <section className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="container-custom text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Grow Your Business?</h2>
        <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-xl inline-block">
          Contact Us Today
        </Link>
      </div>
    </section>
  </div>
);

export default Services;
