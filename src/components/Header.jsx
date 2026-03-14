import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <span className="logo-am"></span>
        <span>Portfolio</span>
      </div>
      <nav>
        <NavLink to="/" activeclassname="active">
          Home
        </NavLink>
        <NavLink to="/resume" activeclassname="active">
          Resume
        </NavLink>
        <NavLink to="/skills" activeclassname="active">
          Skills
        </NavLink>
        <NavLink to="/projects" activeclassname="active">
          Projects
        </NavLink>
        <NavLink to="/contact" activeclassname="active">
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
