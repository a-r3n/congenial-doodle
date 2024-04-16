import React from 'react';
import Navigation from './Navigation/Navigation';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <h1>Your Name</h1>
            <Navigation />
        </header>
    );
}

export default Header;
