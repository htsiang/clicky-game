import React from 'react';
import './style.css';

function Header() {
    return (
        <div className="header">
            <h1 id="title">Clicky Game!</h1>
            <h2 id="subtitle">Click on an image to earn points, but don't click on any more than once!</h2>
        </div>
    );
};

export default Header;