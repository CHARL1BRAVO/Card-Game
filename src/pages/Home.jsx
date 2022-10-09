import ExitGameButton from '../components/buttons/ExitGameButton.jsx'
import PlayerNameInput from '../components/inputs/PlayerNameInput.jsx'
import '../styles/Home.css'
import { useNavigate } from "react-router-dom";


export default function Home(props) {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/gameboard");
  }
  return (

  <div>
    <p className='memory-title'>Memory</p>
    <ExitGameButton />
    <p className='play-title'>Are you ready to play?</p>
    <div className='players'>
      <PlayerNameInput imagePath='/images/Player1.png' inputPlaceholder='Name of player 1' />
      <PlayerNameInput imagePath='/images/Player2.png' inputPlaceholder='Name fo player 2' />
    </div>
    <div className='play-button-contaner'>
      <button className='play-button' type='submit' onClick={handleClick}>Let's Play</button>
    </div>
  </div>
  )
}