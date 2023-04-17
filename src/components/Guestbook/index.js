import React, { useState } from 'react';

function Guestbook() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [entries, setEntries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { name, message };
    setEntries([...entries, newEntry]);
    setName('');
    setMessage('');
  };

  return (
    <div>
      <h2>Guestbook</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
      <hr />
      {entries.map((entry, index) => (
        <div key={index}>
          <p><strong>{entry.name}</strong> wrote:</p>
          <p>{entry.message}</p>
        </div>
      ))}
    </div>
  );
}

export default Guestbook;