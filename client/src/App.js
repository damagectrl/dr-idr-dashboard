import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [status, setStatus] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    axios.get('/api/status').then(res => {
      setStatus(res.data.status);
      setTime(res.data.time);
    });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>📊 DR/IDR Edge Tracker</h1>
      <p>Status: {status}</p>
      <p>Server Time: {time}</p>
      <h2>Pairs: NAS100, US30, XAUUSD, USDJPY</h2>
      <p>📈 DR/IDR bias, signals, and session logic running...</p>
    </div>
  );
}

export default App;
