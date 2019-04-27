import React from 'react';
import "./style.css";

function NavBar(props) {
    
    return (
        <nav className="navbar">
            <p>Score: {props.score} | Top Score: {props.score}</p>
            <button onClick={props.reset}>Reset Game</button>
        </nav>
    )
}

export default NavBar;