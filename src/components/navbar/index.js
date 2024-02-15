import React from 'react';
import { Link , useHistory } from 'react-router-dom';
import './navbar.css'
import HamburgerMenu from '../Hamburger';


function Navbar() {

  const history = useHistory();

  const handleClick = (e) => {
    history.push(e)
  };


  return (
    <div className='navbar-container'>
      <div className='navbar-left'>
        <ul className='nav-icon'>
            <li><Link to="/"><img className='dk-logo' src='/dk-logo.png' alt='' /></Link></li>
        </ul>
        <HamburgerMenu />

      </div>
      <div className='navbar-right'>
        <div className='nav-link-container'>
          <ul >
            <li className='nav-link '> 
            <button className='nav-button' value={'/about'} onClick={(e) => handleClick(e.target.value)}>
                <i className="fas fa-user " /> About
              </button>
            </li>
            <li className='nav-link '> 
            <button className='nav-button' value={'/services'} onClick={(e) => handleClick(e.target.value)}>
                <i className="fas fa-user" /> Services
              </button>
            </li>
            <li className='nav-link '> 
            <button className='nav-button' value={'/projects'} onClick={(e) => handleClick(e.target.value)}>
                <i className="fas fa-user" /> Projects
              </button>
            </li>
  
            <li className='nav-link '> 
            <button className='nav-button' value={'github.com'} onClick={()=> window.open("https://www.github.com/danronkam", "_blank")} type="button">
                <i className="icon fab fa-github"/>
            </button>
            </li>
            <li className='nav-link '> 
            <button className='nav-button' value={'/linkedin'} onClick={()=> window.open("https://www.linkedin.com/in/danronkam", "_blank")} >
                <i className="icon fab fa-linkedin"/>
              </button>
            </li>
            <li className='nav-link '> 
            <button className='nav-button' value={'/substack'} onClick={()=> window.open("https://designdk.substack.com", "_blank")} >
                <img src='https://derailed-seed.s3.us-west-1.amazonaws.com/ss_purple.png' alt='substack'/>
              </button>
            </li>
            <li className='nav-link '> 
            <button className='nav-button' value={'/contact'} onClick={(e) => handleClick(e.target.value)}>
              <i className="fa fa-pen-fancy"/> Contact
            </button>
            </li>
          
          </ul>


        </div>
      </div>
    </div>
  );
}

export default Navbar;