// src/components/AdviceCard.js
import React, { useState, useEffect } from 'react';

const AdviceCard = ({ coords, status }) => {
  const [mainMessage, setMainMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!coords || !status) return;

    const fetchInitialAnalysis = async () => {
      setLoading(true);
      try {
        const res = await fetch('http://localhost:5000/api/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...coords, result: status }),
        });

        const data = await res.json();
        setMainMessage(data.message || '⚠️ No analysis available.');
      } catch (err) {
        setMainMessage('❌ Could not connect to XAI.');
      } finally {
        setLoading(false);
      }
    };

    fetchInitialAnalysis();
  }, [coords, status]);

  if (!mainMessage && !loading) return null;

  return (
    <div className="neon-card">
      <h5 className="text-neon mb-2">🧠 XAI Analysis</h5>
      {loading ? (
        <p className="text-light">🔄 Analyzing shot...</p>
      ) : (
        <p className="text-light" style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>
          {mainMessage}
        </p>
      )}
    </div>
  );
};

export default AdviceCard;
