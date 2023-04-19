import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sp">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
        </ul>
        <ul>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/about">About</Link></li>
        </ul>
    </nav>
  );
}

export default Navbar;