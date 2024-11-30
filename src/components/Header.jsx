// src/components/Header.jsx
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Header.css';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const [searchActive, setSearchActive] = useState(false);

    const handleSearchClick = () => {
        setSearchActive(!searchActive);
    };

    const handleSearchBlur = () => {
        setSearchActive(false);
    };

    return (
        <header className="header">
            <div className="top-row">
                <div className="logo">
                    <img src={require('../assets/logo.png')} alt="Insight360 Logo" />
                </div>
                <div className="header-right">
                    {user ? (
                        <div className="user-info">
                            <span>Welcome, {user.fullName}</span>
                            <button onClick={logout} className="logout-button">Logout</button>
                        </div>
                    ) : (
                        <Link to="/signin" className="sign-in">Sign In</Link>
                    )}
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
                        <li><Link to="/Technology">Technology</Link></li>
                        <li><Link to="/Science">Science</Link></li>
                        <li><Link to="/Sports">Sports</Link></li>
                        <li><Link to="/Entertainment">Entertainment</Link></li>
                        <li><Link to="/Business">Business</Link></li>
                        <li><Link to="/Beauty">Beauty</Link></li>
                        <li><Link to="/Health">Health</Link></li>
                        <li><Link to="/Arts-culture">Arts & Culture</Link></li>
                    </ul>
                </nav>
                <div className={`search-icon ${searchActive ? 'active' : ''}`} onClick={handleSearchClick}>
                    <i className="fas fa-search"></i>
                    <input
                        type="text"
                        className={`search-input ${searchActive ? 'active' : ''}`}
                        placeholder="Search..."
                        onBlur={handleSearchBlur}
                        onFocus={() => setSearchActive(true)}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
