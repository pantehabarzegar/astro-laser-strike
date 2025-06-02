// backend/routes/analyze.js
const express = require('express');
const router = express.Router();
const { analyzeShot, analyzeFollowUp } = require('../services/grokService');

router.post('/', async (req, res) => {
  const { lat, lon, result, followup } = req.body;

  try {
    if (followup) {
      const message = await analyzeFollowUp(followup);
      return res.json({ message });
    }

    if (typeof lat !== 'number' || typeof lon !== 'number' || !['hit', 'miss'].includes(result)) {
      return res.status(400).json({ error: 'Invalid input' });
    }

    const message = await analyzeShot(lat, lon, result);
    res.json({ message });

  } catch (err) {
    console.error('❌ Error:', err.message);
    res.status(500).json({ error: 'XAI analysis failed' });
  }
});

module.exports = router;
