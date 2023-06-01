import React from 'react';
import { Link , useHistory } from 'react-router-dom';
import './navbar.css'


function Navbar() {

  const history = useHistory();

  const handleClick = (e) => {
    // e.preventDefault();
    console.log(e)
    history.push(e)
  }


  return (
    <div className='navbar-container'>
      <div className='navbar-left'>
        <ul>
            <li><Link to="/"><img className='dk-logo' src='/dk-logo.png' alt='' /></Link></li>
        </ul>
      </div>
      <div className='navbar-right'>
        <div className='nav-link-container'>
          <ul >
            <li className='nav-link '> 
              <button className='nav-button' value={'/blog'} onClick={(e) => handleClick(e.target.value)}>
                <i class="fa fa-pen-fancy"/> Blog
              </button>
            </li>
            <li className='nav-link '> 
            <button className='nav-button' value={'/about'} onClick={(e) => handleClick(e.target.value)}>
                <i class="fas fa-user " /> About
              </button>
            </li>
            <li className='nav-link '> 
            <button className='nav-button' value={'/tldr'} onClick={(e) => handleClick(e.target.value)}>
                <i class="fas fa-user" /> TLDR
              </button>
            </li>
            <li className='nav-link '> 
            <button className='nav-button' value={'github.com'} onClick={(e) => handleClick(e.target.value)}>
                <i class="icon fab fa-github"/>
              </button>
            </li>
            <li className='nav-link '> 
            <button className='nav-button' value={'/linkedin'} onClick={(e) => handleClick(e.target.value)}>
                <i class="icon fab fa-linkedin"/>
              </button>
            </li>
            <li className='nav-link '> 
            <button className='nav-button' value={'/substack'} onClick={(e) => handleClick(e.target.value)}>
                <i class="icon fa-solid fa-blog"/>
              </button>
            </li>
            <li className='nav-link '> 
            <button className='nav-button' value={'/contact'} onClick={(e) => handleClick(e.target.value)}>
              <i class="fa fa-pen-fancy"/> Contact
              </button>
            </li>
          
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Navbar;