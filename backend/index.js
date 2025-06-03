// backend/index.js
const express = require('express');
const cors = require('cors');
const analyzeRoute = require('./routes/analyze');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000; // Railway will inject PORT env

// ✅ Log startup clearly
console.log('🔧 Initializing Astro Laser Strike backend...');

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/analyze', analyzeRoute);

// ✅ Health Check Routes
app.get('/', (req, res) => {
  res.send('✅ API is alive!');
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// ✅ Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server is live on http://0.0.0.0:${PORT}`);
});
