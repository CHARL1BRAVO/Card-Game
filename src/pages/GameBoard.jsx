import ExitGameButton from "../components/buttons/ExitGameButton";
import ScoreCard from "../components/ScoreCard";
import Card from "../components/Card";
import '../styles/GameBoard.css';
import { useGameStore } from "../store/store";
import PlayerTurn from "../components/PlayerTurn";


export default function GameBoard(props) {
    
    const player1Name = useGameStore((state) => state.player1Name )
    const player2Name = useGameStore((state) => state.player2Name )
    const playerTurn = useGameStore((state) => state.playerTurn )

    const deck = useGameStore((state) => state.deck )

  return (

<div>
    <p className='memory-title'>Memory</p>
    <ExitGameButton />
    <div className="player-1">
        <ScoreCard imagePath='/images/Player1.png' playerName={player1Name} />
        {(playerTurn === player1Name) && (<PlayerTurn />)}
    </div>
    <div className="player-2">
        <ScoreCard imagePath='/images/Player2.png' playerName={player2Name} />
        {playerTurn === player2Name && <PlayerTurn />}
    </div>
    
    <div className="board">
        <div className="cards">
            {deck.map((card,i) => (
                <Card card={card} key={i} />
            ))}
        </div>
    </div>
</div>
  )
}