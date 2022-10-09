import { useEffect, useState} from "react";
import ExitGameButton from "../components/buttons/ExitGameButton";
import ScoreCard from "../components/ScoreCard";
import {createDeck,shuffleDeck} from '../helpers/deck.js';
import Card from "../components/Card";
import '../styles/GameBoard.css';


export default function GameBoard(props) {
    const [deck,setDeck] = useState([])
    useEffect(() => {
        let deck = createDeck()
        shuffleDeck(deck)
        setDeck(deck)
    },[])
  return (

<div>
    <p className='memory-title'>Memory</p>
    <ExitGameButton />
    <div className="player-cards">
        <ScoreCard imagePath='/images/Player1.png' />
        <ScoreCard imagePath='/images/Player2.png' />
    </div>
    <div className="board">
        <div className="cards">
            {deck.map((card) => (
                <Card card={card} />
            ))}
        </div>
    </div>
</div>
  )
}