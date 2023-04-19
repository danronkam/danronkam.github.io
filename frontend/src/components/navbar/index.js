import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'


function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='navbar-left'>
        <ul>
          <li><Link to="/">DAN KAM</Link></li>
        </ul>
      </div>
      <div className='navbar-right'>
        <div className='nav-link-container'>
          <ul >
            <li className='nav-link internal'><Link to="/blog">Blog</Link></li>
            <li className='nav-link internal'><Link to="/sp">About</Link></li>
            <li className='nav-link'><a to="/blog"> Github </a></li>
            <li className='nav-link'><a to="/sp">Linkedin</a></li>
            <li className='nav-link'><a to="/blog">Substack</a></li>
            <li className='nav-link'><a to="/sp">Email</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;