import React from 'react';
import Card from "../Card"
import "./style.css";

function Gameboard(props) {
    // map images to cards
    return (
        <div>
            {props.cards.map((element, i) => {
                return (
                    <Card
                        image={element.url}
                        onClick={() => props.clickImage(element.id)}
                    />
                )  
            
            })}
        </div>
    )
}

export default Gameboard;