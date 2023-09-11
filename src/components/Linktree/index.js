import React from 'react';
import './Linktree.css'; // Import your CSS file

const Linktree = () => {
  const links = [
    { title: 'Instagram', url: 'https://www.instagram.com/' },
    { title: 'Twitter', url: 'https://twitter.com/' },
    // Add more links as needed
  ];

  return (
    <div className="linktree-container">
      <h1>My Linktree</h1>
      <ul className="link-list">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Linktree;
