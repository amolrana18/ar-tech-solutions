const express = require('express');
const { body, validationResult } = require('express-validator');
const DemoRequest = require('../models/DemoRequest');

const router = express.Router();

router.post('/',
  [
    body('name').notEmpty().trim().escape(),
    body('email').isEmail().normalizeEmail(),
    body('company').notEmpty().trim(),
    body('phone').notEmpty().trim(),
    body('product').isIn(['booking-engine', 'channel-manager', 'both'])
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
      const demoRequest = new DemoRequest(req.body);
      await demoRequest.save();
      res.status(201).json({ message: 'Demo request submitted successfully', data: demoRequest });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  }
);

module.exports = router;
