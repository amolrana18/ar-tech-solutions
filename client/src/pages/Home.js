import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { BarChart3, Search, Megaphone, TrendingUp, Hotel, Link2 } from 'lucide-react';

const Home = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    { icon: BarChart3, title: 'Digital Consulting', description: 'Strategic guidance to transform your digital presence' },
    { icon: Search, title: 'SEO Services', description: 'Boost your rankings and drive organic traffic' },
    { icon: Megaphone, title: 'Digital Marketing', description: 'Multi-channel marketing campaigns that convert' },
    { icon: TrendingUp, title: 'Google Ads', description: 'Maximize ROI with targeted advertising' },
  ];

  const products = [
    { icon: Hotel, title: 'Booking Engine', description: 'Direct booking solution with zero commission', features: ['Real-time availability', 'Secure payments', 'Mobile responsive'] },
    { icon: Link2, title: 'Channel Manager', description: 'Sync rates and inventory across all platforms', features: ['Multi-platform sync', 'Rate management', 'Real-time updates'] },
  ];

  const testimonials = [
    // { name: 'John Smith', company: 'Grand Hotel', text: 'AR TECH transformed our online booking system. Revenue increased by 45%!' },
    // { name: 'Sarah Johnson', company: 'Boutique Inn', text: 'Their SEO services brought us to page one on Google. Outstanding results!' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
        <div className="container-custom text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Transform Your Business with Smart Digital Solutions
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Empower your business with cutting-edge digital consulting and hotel-tech solutions that drive real results.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact" className="btn-primary">Book Demo →</Link>
            <Link to="/services" className="btn-secondary">Explore Services</Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white" ref={ref}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive digital solutions tailored to your needs</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300">
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Products</h2>
            <p className="text-xl text-gray-600">Powerful hotel-tech solutions to maximize your revenue</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: index === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
                className="bg-white rounded-xl p-8 shadow-lg">
                <product.icon className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>{feature}
                    </li>
                  ))}
                </ul>
                <Link to="/products" className="text-primary font-semibold hover:underline">Learn More →</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by businesses worldwide</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8">
                <p className="text-gray-700 text-lg mb-4">"{t.text}"</p>
                <p className="font-semibold">{t.name}</p>
                <p className="text-gray-500">{t.company}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white opacity-90 mb-8">Get started with AR TECH today and see the difference</p>
            <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300">
              Request a Demo
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
