import React from "react";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import Gameboard from "./components/Gameboard";
import "./style.css";

function Wrapper() {
    return (
        <div  className= "container-fluid">
            <NavBar />
            <Jumbotron />
            <Gameboard />
        </div>
    )
}

export default Wrapper;