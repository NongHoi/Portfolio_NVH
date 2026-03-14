import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="logo">
        <span className="logo-am"></span>
        <span>Portfolio</span>
      </div>
      
      <button 
        className="menu-toggle" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" activeclassname="active" onClick={handleNavClick}>
          Home
        </NavLink>
        <NavLink to="/resume" activeclassname="active" onClick={handleNavClick}>
          Resume
        </NavLink>
        <NavLink to="/skills" activeclassname="active" onClick={handleNavClick}>
          Skills
        </NavLink>
        <NavLink to="/projects" activeclassname="active" onClick={handleNavClick}>
          Projects
        </NavLink>
        <NavLink to="/contact" activeclassname="active" onClick={handleNavClick}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
