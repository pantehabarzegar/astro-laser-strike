// backend/index.js
const express = require('express');
const cors = require('cors');
const analyzeRoute = require('./routes/analyze');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/analyze', analyzeRoute);

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
});
