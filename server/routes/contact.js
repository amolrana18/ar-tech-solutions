const express = require('express');
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');

const router = express.Router();

router.post('/',
  [
    body('name').notEmpty().trim().escape(),
    body('email').isEmail().normalizeEmail(),
    body('phone').notEmpty().trim(),
    body('message').notEmpty().trim().isLength({ min: 10 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
      const contact = new Contact(req.body);
      await contact.save();
      res.status(201).json({ message: 'Contact form submitted successfully', data: contact });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  }
);

module.exports = router;
