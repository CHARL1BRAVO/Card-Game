import { useNavigate } from "react-router-dom";
import { useGameStore } from "../../store/store";
import "../../styles/ExitGameButtonStyles.css";

export default function ExitGameButton() {
  const setPlayer1Name = useGameStore((state) => state.setPlayer1Name);
  const setPlayer2Name = useGameStore((state) => state.setPlayer2Name);

  let navigate = useNavigate();
  function handleClick() {
    setPlayer1Name("");
    setPlayer2Name("");

    navigate("/");
  }
  return (
    <div>
      <button className="exit-game-button" onClick={handleClick}>
        Exit Game
      </button>
    </div>
  );
}
