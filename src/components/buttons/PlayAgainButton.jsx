import { useNavigate } from "react-router-dom";
import { createDeck, shuffleDeck } from "../../helpers/deck";
import { useGameStore } from "../../store/store";
import "../../styles/PlayAgainButton.css";

export default function PlayAgainButton() {
  const resetGame = useGameStore((state) => state.resetGame);
  const setDeck = useGameStore((state) => state.setDeck);

  let navigate = useNavigate();
  function handleClick() {
    resetGame();
    const deck = createDeck();
    shuffleDeck(deck)
    setDeck(deck)

    navigate("/gameboard");
  }
  return (
    <div>
      <button className="play-again-button" onClick={handleClick}>
        Play Again
      </button>
    </div>
  );
}