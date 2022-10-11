import "../styles/LeaderBoard.css";
import WinBoard from "../components/WinBoard";
import { useGameStore } from "../store/store.js";
import PlayAgainButton from "../components/buttons/PlayAgainButton";

export default function LeaderBoard() {
  const player1Name = useGameStore((state) => state.player1Name);
  const player2Name = useGameStore((state) => state.player2Name);
  const player1Score = useGameStore((state) => state.player1Score);
  const player2Score = useGameStore((state) => state.player2Score); 
  const winnerImage = player1Score > player2Score ? '/images/player1.png' : '/images/player2.png'
  const winnerScore = player1Score > player2Score ? player1Score : player2Score
  const winnerName = player1Score > player2Score ? player1Name : player2Name

  const loserImage = player1Score < player2Score ? '/images/player1.png' : '/images/player2.png'
  const loserScore = player1Score < player2Score ? player1Score : player2Score
  const loserName = player1Score < player2Score ? player1Name : player2Name
  return (
    <div>
        <p className="well-done">Well Done!</p>
        <p className="winner">{winnerName}</p>
        <div>
            <img src='/images/LeaderBoard.png' className="player-winner-logo" alt="winner astronaut logo"></img>
        </div>
        <div className="result-cards">
            <WinBoard imagePath={winnerImage} score={winnerScore} playerName={winnerName} placement='1st Place'  />
            <WinBoard imagePath={loserImage} score={loserScore} playerName={loserName} placement='2nd Place'  />
        </div>
        <PlayAgainButton />
    </div>
  );
}
