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
                    url: "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_1280.jpg",
                    clicked: false
                },
                {
                    id: 2,
                    url: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",
                    clicked: false
                },
                {
                    id: 3,
                    url: "https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_1280.jpg",
                    clicked: false
                },
                {
                    id: 4,
                    url: "https://cdn.pixabay.com/photo/2017/05/31/18/38/sea-2361247_1280.jpg",
                    clicked: false
                },
                {
                    id: 5,
                    url: "https://cdn.pixabay.com/photo/2017/10/20/10/58/elephant-2870777_1280.jpg",
                    clicked: false
                },
                {
                    id: 6,
                    url: "https://cdn.pixabay.com/photo/2016/12/31/21/22/discus-fish-1943755_1280.jpg",
                    clicked: false
                },
                {
                    id: 7,
                    url: "https://cdn.pixabay.com/photo/2013/11/01/11/13/dolphin-203875_1280.jpg",
                    clicked: false
                },
                {
                    id: 8,
                    url: "https://cdn.pixabay.com/photo/2016/12/04/21/58/rabbit-1882699_1280.jpg",
                    clicked: false
                },
                {
                    id: 9,
                    url: "https://cdn.pixabay.com/photo/2017/12/10/15/16/white-horse-3010129_1280.jpg",
                    clicked: false
                },
                {
                    id: 10,
                    url: "https://cdn.pixabay.com/photo/2017/04/11/21/34/giraffe-2222908_1280.jpg",
                    clicked: false
                },
                {
                    id: 11,
                    url: "https://cdn.pixabay.com/photo/2014/05/26/13/32/striped-core-354528_1280.jpg",
                    clicked: false
                },
                {
                    id: 12,
                    url: "https://cdn.pixabay.com/photo/2014/10/01/10/44/hedgehog-468228_1280.jpg",
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
            <div>
                <NavBar 
                    score= {this.state.score}
                    topScore= {this.state.topScore}
                    reset= {this.resetGame}
                />
                <div className= "container-fluid">
                    <Jumbotron />
                    <Gameboard
                        cards= {this.state.cards}
                        clickImage= {this.clickImage}
                    />
                </div>
            </div>
        )
    }
}

export default Wrapper;