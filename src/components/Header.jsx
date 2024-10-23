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
            <li><a href="/page">Page</a></li>
            <li><a href="/science">Science</a></li>
            <li><a href="/technology">Technology</a></li>
            <li><a href="/beauty">Beauty</a></li>
            <li><a href="/health">Health</a></li>
            <li><a href="/arts-culture">Arts & Culture</a></li>
            <li><a href="/opinion">Opinion</a></li>
            <li><a href="/videos">Videos</a></li>
            <li><a href="/gallery">Gallery</a></li>
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
