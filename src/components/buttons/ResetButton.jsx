import { createDeck, shuffleDeck } from "../../helpers/deck";
import { useGameStore } from "../../store/store";
import "../../styles/ResetButton.css";

export default function ResetButton() {
  const resetGame = useGameStore((state) => state.resetGame);
  const setDeck = useGameStore((state) => state.setDeck);

  function handleClick() {
    resetGame();
    const deck = createDeck();
    shuffleDeck(deck);
    setDeck(deck);
  }
  return (
    <div>
      <button className="reset-game-button" onClick={handleClick}>
        Restart Game
      </button>
    </div>
  );
}
