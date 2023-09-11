import React from 'react';
import './Linktree.css'; // Import your CSS file

const Linktree = () => {
  const links = [
    { title: 'Email Me', url: 'https://www.instagram.com/' },
    { title: 'Check out my Portfolio', url: 'https://twitter.com/' },
    { title: 'Substack', url: 'https://www.instagram.com/' },
    { title: 'Linkedin', url: 'https://twitter.com/' },
    { title: 'Live Projects', url: 'https://www.instagram.com/' },
    { title: 'E-Mail Me', url: 'https://twitter.com/' },

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
