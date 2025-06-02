const axios = require('axios');

const analyzeShot = async (lat, lon, result) => {
  const apiKey = process.env.XAI_API_KEY;

  const prompt = `The player fired at coordinates: latitude ${lat}, longitude ${lon}. The result was a ${result}. Explain the result and offer suggestions.`;

  const response = await axios.post('https://api.x.ai/v1/chat/completions', {
    model: 'grok-3-latest',
    messages: [
      { role: 'system', content: 'You are an AI advisor for a space laser strike game.' },
      { role: 'user', content: prompt }
    ],
    stream: false,
    temperature: 0.5
  }, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }
  });

  return response.data.choices[0].message.content;
};

const analyzeFollowUp = async (question) => {
  const apiKey = process.env.XAI_API_KEY;

  const response = await axios.post('https://api.x.ai/v1/chat/completions', {
    model: 'grok-3-latest',
    messages: [
      { role: 'system', content: 'You are an interactive assistant inside a space shooter game. Help the player.' },
      { role: 'user', content: question }
    ],
    stream: false,
    temperature: 0.7
  }, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }
  });

  return response.data.choices[0].message.content;
};

module.exports = {
  analyzeShot,
  analyzeFollowUp
};
