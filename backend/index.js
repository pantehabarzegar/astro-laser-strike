// backend/index.js
const express = require('express');
const cors = require('cors');
const analyzeRoute = require('./routes/analyze');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/analyze', analyzeRoute);

// ✅ Healthcheck route for Railway
app.get('/', (req, res) => {
  res.send('✅ Astro Laser Strike API is alive!');
});

// Optional: add /health if needed for monitoring tools
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
});
