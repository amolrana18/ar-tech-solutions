const mongoose = require('mongoose');

const demoSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  company: { type: String, required: true, trim: true },
  phone: { type: String, required: true },
  product: { type: String, enum: ['booking-engine', 'channel-manager', 'both'], required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('DemoRequest', demoSchema);
