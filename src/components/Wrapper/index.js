import React, { Component } from "react";
import NavBar from "../NavBar";
import Jumbotron from "../Jumbotron";
import Gameboard from "../Gameboard";
import "./style.css";

class Wrapper extends Component {
    state = {
        score: 0,
        topScore: 0,
        cards: []
    }

    componentDidMount() {
        this.setState({
            cards: [
                {
                    id: 1,
                    url: "https://via.placeholder.com/150",
                    clicked: false
                },
                {
                    id: 2,
                    url: "https://via.placeholder.com/150",
                    clicked: false
                },
                {
                    id: 3,
                    url: "https://via.placeholder.com/150",
                    clicked: false
                },
                {
                    id: 4,
                    url: "https://via.placeholder.com/150",
                    clicked: false
                },
                {
                    id: 5,
                    url: "https://via.placeholder.com/150",
                    clicked: false
                },
                {
                    id: 6,
                    url: "https://via.placeholder.com/150",
                    clicked: false
                },
                {
                    id: 7,
                    url: "https://via.placeholder.com/150",
                    clicked: false
                },
                {
                    id: 8,
                    url: "https://via.placeholder.com/150",
                    clicked: false
                },
                {
                    id: 9,
                    url: "https://via.placeholder.com/150",
                    clicked: false
                },
                {
                    id: 10,
                    url: "https://via.placeholder.com/150",
                    clicked: false
                },
                {
                    id: 11,
                    url: "https://via.placeholder.com/150",
                    clicked: false
                },
                {
                    id: 12,
                    url: "https://via.placeholder.com/150",
                    clicked: false
                },
                {
                    id: 13,
                    url: "https://via.placeholder.com/150",
                    clicked: false
                },
                {
                    id: 14,
                    url: "https://via.placeholder.com/150",
                    clicked: false
                },
                {
                    id: 15,
                    url: "https://via.placeholder.com/150",
                    clicked: false
                }
            ]
        })
    }

    clickImage = num => {
        
        if (this.state.cards[num].clicked === false) {
            let arrayCopy = this.state.cards;
            for (let i = 0; i < arrayCopy.length; i++) {
                if (arrayCopy.id === num) {
                    arrayCopy[i].clicked = true
                }
            }
            this.setState({
                cards: arrayCopy,
                score: this.state.score + 1
            });

            if (this.state.score > this.state.topscore) {
                this.setState({
                    topScore: this.state.score
                });
            }

            if (this.state.score === 12) {
                alert("You won!");
                this.resetGame();
            }

            this.shuffleImages(this.state.cards.slice(0));
        } else {
            this.gameOver();
        }
    }

    shuffleImages = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        this.setState({
            cards: arr
        })
    }

    gameOver = () => {
        alert("you lose");
        this.resetGame();
    }

    resetGame = () => {
        let resetArrayCopy = this.state.cards;
        for (let i = 0; i < resetArrayCopy.length; i++) {
            resetArrayCopy[i].clicked = false;
        }

        this.setState({
            score: 0,
            cards: resetArrayCopy
        })
    }

    render() {
        return (
            <div  className= "container-fluid">
                <NavBar 
                    score= {this.state.score}
                    topScore= {this.state.topScore}
                />
                <Jumbotron />
                <Gameboard
                    cards= {this.state.cards}
                    clickImage= {this.clickImage}
                />
            </div>
        )
    }
}

export default Wrapper;