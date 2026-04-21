const express = require('express');
const Contact = require('../models/Contact');
const DemoRequest = require('../models/DemoRequest');

const router = express.Router();

router.get('/leads', async (req, res) => {
  try {
    const [contacts, demos] = await Promise.all([
      Contact.find().sort({ createdAt: -1 }),
      DemoRequest.find().sort({ createdAt: -1 })
    ]);
    res.json({ contacts, demos });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
