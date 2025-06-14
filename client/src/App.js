import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const fetchMessages = async () => {
    const res = await axios.get('http://13.233.77.156:4000/api/messages');
    setMessages(res.data);
  };

  const sendMessage = async () => {
    await axios.post('http://13.233.77.156:4000/api/messages', { text: input });
    setInput('');
    fetchMessages();
  };

  useEffect(() => { fetchMessages(); }, []);

  return (
    <div>
      <h1>MERN App</h1>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
      <ul>{messages.map((m, i) => <li key={i}>{m.text}</li>)}</ul>
    </div>
  );
}

export default App;
