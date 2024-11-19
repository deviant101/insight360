// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [searchActive, setSearchActive] = useState(false);

  const handleSearchClick = () => {
    setSearchActive(!searchActive);
  };

  return (
    <header className="header">
      <div className="top-row">
        <div className="logo">
          <img src={require('../assets/logo.png')} alt="Insight360 Logo" />
        </div>
        <div className="header-right">
          <Link to="/signup" className="sign-in">Sign In</Link>
          <div className="social-icons">
            <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="https://youtube.com"><i className="fab fa-youtube"></i></a>
            <a href="https://vimeo.com"><i className="fab fa-vimeo-v"></i></a>
            <a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <div className="bottom-row">
        <nav className="navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/news/technology">Technology</Link></li>
            <li><Link to="/news/science">Science</Link></li>
            <li><Link to="/news/sports">Sports</Link></li>
            <li><Link to="/news/entertainment">Entertainment</Link></li>
            <li><Link to="/news/business">Business</Link></li>
            <li><Link to="/news/beauty">Beauty</Link></li>
            <li><Link to="/news/health">Health</Link></li>
            <li><Link to="/news/arts-culture">Arts & Culture</Link></li>
          </ul>
        </nav>
        <div className={`search-icon ${searchActive ? 'active' : ''}`} onClick={handleSearchClick}>
          <i className="fas fa-search"></i>
          <input
            type="text"
            className={`search-input ${searchActive ? 'active' : ''}`}
            placeholder="Search..."
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
