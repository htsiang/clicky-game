import React from "react";
import "./style.css";

function Navbar() {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="brand" href="#">Clicky Game</a>
            </li>
            <li className="nav-item">
                <p>You guessed correctly/incorrectly!</p>
            </li>
            <li className="nav-item">
                <p>Score: 0 | Top Score: 0</p>
            </li>
        </ul>
    );
};

export default Navbar;