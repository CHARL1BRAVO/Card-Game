import ExitGameButton from "../components/buttons/ExitGameButton.jsx";
import PlayerNameInput from "../components/inputs/PlayerNameInput.jsx";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import { useGameStore } from "../store/store.js";
import { createDeck, shuffleDeck } from "../helpers/deck.js";

export default function Home() {
  const setPlayer1Name = useGameStore((state) => state.setPlayer1Name);
  const setPlayer2Name = useGameStore((state) => state.setPlayer2Name);
  const player1Name = useGameStore((state) => state.player1Name);
  const player2Name = useGameStore((state) => state.player2Name);
  const setDeck = useGameStore((state) => state.setDeck);

  let navigate = useNavigate();
  const handleClick = () => {
    if (player1Name.trim() === "" || player2Name.trim() === "") {
      alert("You need to have a friend to play");
      return;
    }
    const deck = createDeck();
    shuffleDeck(deck);
    setDeck(deck);

    navigate("/gameboard");
  };

  return (
    <div>
      <p className="memory-title">Memory</p>
      <ExitGameButton />
      <p className="play-title">Are you ready to play?</p>
      <div className="players">
        <PlayerNameInput
          imagePath="/images/Player1.png"
          inputPlaceholder="Name of player 1"
          onChange={(e) => setPlayer1Name(e.target.value)}
        />
        <PlayerNameInput
          imagePath="/images/Player2.png"
          inputPlaceholder="Name fo player 2"
          onChange={(e) => setPlayer2Name(e.target.value)}
        />
      </div>
      <div className="play-button-contaner">
        <button className="play-button" onClick={handleClick}>
          Let's Play
        </button>
      </div>
    </div>
  );
}
