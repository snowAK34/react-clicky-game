import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import Gameboard from "./components/Gameboard";
import "./style.css";

class Wrapper extends Component {
    state = {
        score: 0,
        topScore: 0,
        cards: []
    }

    

    render() {
        return (
            <div  className= "container-fluid">
                <NavBar />
                <Jumbotron />
                <Gameboard />
            </div>
        )
    }
}

export default Wrapper;