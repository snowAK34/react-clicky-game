import React from 'react';
import "./style.css";

function Card(props) {
    
    return (
        <div className="card" onClick={props.onClick}>
            <img src={props.image} alt="gamepiece"></img>
        </div>
    )
}

export default Card;