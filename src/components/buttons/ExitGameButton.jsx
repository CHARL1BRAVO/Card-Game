import { useNavigate } from "react-router-dom";
import { useGameStore } from "../../store/store";
import "../../styles/ExitGameButtonStyles.css";

export default function ExitGameButton() {
  const exitGameReset = useGameStore((state) => state.exitGameReset)

  let navigate = useNavigate();
  function handleClick() {
    exitGameReset()

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
