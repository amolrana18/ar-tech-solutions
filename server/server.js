const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { doubleCsrf } = require('csrf-csrf');

dotenv.config();

const app = express();

// Security headers
app.use(helmet());

// Restrict CORS to frontend origin only
const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:3000').split(',');
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true
}));

app.use(cookieParser());
app.use(express.json());

// CSRF protection
const { generateToken, doubleCsrfProtection } = doubleCsrf({
  getSecret: () => process.env.CSRF_SECRET || 'artech-csrf-secret-change-in-prod',
  cookieName: '__Host-psifi.x-csrf-token',
  cookieOptions: { sameSite: 'strict', secure: process.env.NODE_ENV === 'production', httpOnly: true },
});

// Endpoint for frontend to fetch CSRF token
app.get('/api/csrf-token', (req, res) => {
  res.json({ csrfToken: generateToken(req, res) });
});

app.use(doubleCsrfProtection);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/artech', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use('/api/contact', require('./routes/contact'));
app.use('/api/demo', require('./routes/demo'));
app.use('/api/admin', require('./routes/leads'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
