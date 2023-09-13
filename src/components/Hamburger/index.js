import React  from 'react';
import './HamburgerMenu.css'; // Import your CSS file
import {slide as Menu } from "react-burger-menu"
import { Link  } from 'react-router-dom';

const HamburgerMenu = () => {



  return (
    <>  
    <div className='hamburger-menu'>
      <Menu 
        right
        isOpen={ false }
        >
        <Link exact to="/" className="burger-link">Home</Link>
        <Link exact to="/about" className="burger-link">About</Link>
        <Link exact to="/work" className="burger-link">Projects</Link>
        <Link exact to="/about" className="burger-link">Substack</Link>
        <Link exact to="/about" className="burger-link">Contact</Link>

      </Menu>

    </div>



    </>
  );
};

export default HamburgerMenu;
