// Header.js
import React, { useState } from 'react';
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
          <img src={require('../assets/logo.png')} alt="Megasis Logo" />
        </div>
        <div className="header-right">
          <a href="/signin" className="sign-in">Sign In</a>
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
            <li><a href="/">Home</a></li>
            <li><a href="/Technology">Technology</a></li>
            <li><a href="/Science">Science</a></li>
            <li><a href="/Sports">Sports</a></li>
            <li><a href="/Entertainment">Entertainment</a></li>
            <li><a href="/Business">Business</a></li>
            <li><a href="/Beauty">Beauty</a></li>
            <li><a href="/Health">Health</a></li>
            <li><a href="/Arts and Culture">Arts & Culture</a></li>
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
