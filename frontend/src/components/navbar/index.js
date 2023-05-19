import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'


function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='navbar-left'>
        <ul>
          <li><Link to="/"><img className='dk-logo' src='/dk-logo.png' /></Link></li>
        </ul>
      </div>
      <div className='navbar-right'>
        <div className='nav-link-container'>
          <ul >
            <li className='nav-link '><Link className='internal' to="/blog"> <i class="fa fa-pen-fancy"/> Blog</Link></li>
            <li className='nav-link '><Link className='internal' to="/about"> <i class="fas fa-user" /> About</Link></li>
            <li className='nav-link '><Link className='internal' to="/tldr"> <i class="fas fa-user" /> TLDR</Link></li>
            <li className='nav-link '><a rel="noreferrer" target='_blank' href="https://github.com/danronkam"> <i class="icon fab fa-github"/> </a></li>
            <li className='nav-link icon'><a rel="noreferrer" target='_blank' href="https://linkedin.com/in/danronkam"><i class="icon fab fa-linkedin"/></a></li>
            <li className='nav-link icon'><a rel="noreferrer" target='_blank' href="https://dankam.substack.com"><i class="icon fa-solid fa-blog"/></a></li>
            <li className='nav-link'><a to="/sp">Email</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;