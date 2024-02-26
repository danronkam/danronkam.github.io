import React from 'react';

const LinkTree = () => {
  return (
    <div className="link-tree">
      <h2>My LinkTree</h2>
      <ul>
        <li>
          <a href="https://example.com/profile1" target="_blank" rel="noopener noreferrer">Profile 1</a>
        </li>
        <li>
          <a href="https://example.com/profile2" target="_blank" rel="noopener noreferrer">Profile 2</a>
        </li>
        <li>
          <a href="https://example.com/profile3" target="_blank" rel="noopener noreferrer">Profile 3</a>
        </li>
      </ul>
    </div>
  );
};

export default LinkTree;
