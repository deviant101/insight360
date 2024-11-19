import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
    return (
        <div className="signin-container">
            <div className="signin-card">
                <h2 className="signin-title">Sign In</h2>
                <p className="signin-subtitle">Enter Login details to get access</p>
                <form className="signin-form">
                    <div className="form-group">
                        <label htmlFor="fullName">Username Or Email Address</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Enter Full Name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                            required
                        />
                    </div>
                    <button type="submit" className="signin-button">Sign In</button>
                </form>
                <p className="signin-footer">
                    Don’t have an account? <Link to="/signup">Sign Up</Link> here
                </p>
            </div>
        </div>
    );
};

export default SignIn;