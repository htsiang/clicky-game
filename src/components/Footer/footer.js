import React from 'react';
import './style.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-2'>
                <span id='bottom-brand'>Clicky Game!  </span>
                <img src={require('./react-logo-transparent.png')} className='logo'></img>
            </div>
        </div>
    );
};

export default Footer;