import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Award } from 'lucide-react';

const stats = [
  { icon: Users, value: '0', label: 'Happy Clients' },
  { icon: Target, value: '0', label: 'Projects Completed' },
  { icon: Lightbulb, value: '0', label: 'Industry Experts' },
  { icon: Award, value: '0', label: 'Awards Won' },
];

const team = [
  // { name: 'Alex Rodriguez', role: 'CEO & Founder' },
  // { name: 'Maria Chen', role: 'CTO' },
  // { name: 'David Kim', role: 'Head of Digital Strategy' },
  // { name: 'Sarah Williams', role: 'Product Manager' },
];

const About = () => (
  <div className="pt-20">
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container-custom text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold mb-4">About AR tech solutions </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-600 max-w-2xl mx-auto">
          Empowering businesses with innovative digital solutions since 2026
        </motion.p>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 text-lg mb-6">
            AR TECH Solutions was founded with a mission to help businesses thrive in the digital age.
            We combine cutting-edge technology with strategic thinking to deliver measurable results for our clients.
          </p>
          <p className="text-gray-600 text-lg">
            From digital consulting to hotel-tech solutions, we've helped hundreds of businesses transform
            their operations and achieve sustainable growth.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{value}</h3>
              <p className="text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Mission & Vision</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
            <p className="text-gray-600 text-lg">To empower businesses with innovative digital solutions that drive growth, enhance customer experiences, and create lasting value in an ever-evolving digital landscape.</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
            <p className="text-gray-600 text-lg">To be the leading provider of digital consulting and hotel-tech solutions, recognized for our innovation, expertise, and commitment to client success worldwide.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
          <p className="text-gray-600">Meet the experts behind our success</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white text-4xl font-bold">{member.name[0]}</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
