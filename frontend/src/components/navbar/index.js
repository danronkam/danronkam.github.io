import React from 'react';
import { Link  } from 'react-router-dom';
import './navbar.css'


function Navbar() {

  // let navigate = useNavigate();

  const handleClick = (target) => {
    console.log(target)
    // navigate(target)
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
              <button className='nav-button' onClick={handleClick('/About')}>
                <i class="fas fa-user " /> About
              </button>
            </li>
            <li className='nav-link '> 
              <button className='nav-button' onClick={handleClick('/TLDR')}>
                <i class="fas fa-user" /> TLDR
              </button>
            </li>
            <li className='nav-link '> 
              <button className='nav-button' onClick={handleClick('https://github.com/danronkam')}>
                <i class="icon fab fa-github"/>
              </button>
            </li>
            <li className='nav-link '> 
              <button className='nav-button' onClick={handleClick('https://linkedin.com/in/danronkam')}>
                <i class="icon fab fa-linkedin"/>
              </button>
            </li>
            <li className='nav-link '> 
              <button className='nav-button' onClick={handleClick('https://designdk.substack.com/')}>
                <i class="icon fa-solid fa-blog"/>
              </button>
            </li>
            <li className='nav-link '> 
              <button className='nav-button' onClick={handleClick('/blog')}>
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