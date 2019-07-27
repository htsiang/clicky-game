import React, { Component } from "react";
import "./style.css";

class Navbar extends Component {
    render() {
        return (
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="brand" href="https://htsiang.github.io/clicky-game/">Clicky Game</a>
                </li>
                <li className="nav-item">
                    <p>{this.props.isCorrect}</p>
                </li>
                <li className="nav-item">
                    <p>
                        Score: 
                        <span> {this.props.userScore} </span>
                        | Top Score:
                        <span> {this.props.highScore} </span>
                    </p>
                </li>
            </ul>
        );
    }
};

export default Navbar;