import React, { useState } from 'react';
import './HamburgerMenu.css'; // Import your CSS file
import {slide as Menu } from "react-burger-menu"
import { Link  } from 'react-router-dom';

const HamburgerMenu = () => {
  let [isOpen, setIsOpen ] = useState(false)

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  // handleStateChange (state) {
  //   this.setState({menuOpen: state.isOpen})  
  // }
  
  // // This can be used to close the menu, e.g. when a user clicks a menu item
  // closeMenu () {
  //   this.setState({menuOpen: false})
  // }

  // // This can be used to toggle the menu, e.g. when using a custom icon
  // // Tip: You probably want to hide either/both default icons if using a custom icon
  // // See https://github.com/negomi/react-burger-menu#custom-icons
  // toggleMenu () {
  //   this.setState(state => ({menuOpen: !state.menuOpen}))
  // }


  return (
    <>  
    <div className='hamburger-menu'>
      <Menu 
        right
        isOpen={ false }
        // onStateChange={(state) => this.handleStateChange(state)}
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
