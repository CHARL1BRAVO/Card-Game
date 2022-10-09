import { useEffect, useState} from "react";
import ExitGameButton from "../components/buttons/ExitGameButton";
import ScoreCard from "../components/ScoreCard";
import {createDeck,shuffleDeck} from '../helpers/deck.js';
import Card from "../components/Card";
import '../styles/GameBoard.css';
import { useGameStore } from "../store/store";


export default function GameBoard(props) {
    const [deck,setDeck] = useState([])
    
    const player1Name = useGameStore((state) => state.player1Name )
    const player2Name = useGameStore((state) => state.player2Name )


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
        <ScoreCard imagePath='/images/Player1.png' playerName={player1Name} />
        <ScoreCard imagePath='/images/Player2.png' playerName={player2Name} />
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