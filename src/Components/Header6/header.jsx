
import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";  

const Header = () => {
  return (
    <nav className="header-navigation">
      <h1 className="logo-text">MUTC</h1> 
      <ul className="navigation-list">
        <li className="navigation-item">
          <Link to="/" className="navigation-link">Home</Link>
        </li>
        <li className="navigation-item">
          <Link to="/leadership" className="navigation-link">Leadership</Link>
        </li>
        <li className="navigation-item">
          <Link to="/tracks" className="navigation-link">Tracks</Link>
        </li>
        <li className="navigation-item">
          <Link to="/events" className="navigation-link">Events</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
