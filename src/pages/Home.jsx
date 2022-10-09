import ExitGameButton from '../components/buttons/ExitGameButton.jsx'
import PlayerNameInput from '../components/inputs/PlayerNameInput.jsx'
import '../styles/Home.css'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useGameStore } from '../store/store.js';


export default function Home(props) {
  const [player1Name,setPlayer1Name] = useState('')
  const [player2Name,setPlayer2Name] = useState('')
  
  const setPlayer1 = useGameStore((state) => state.setPlayer1Name )
  const setPlayer2 = useGameStore((state) => state.setPlayer2Name )


  const handlePlayer1NameChange = (e) => {
    setPlayer1Name(e.target.value) 
  }

  const handlePlayer2NameChange = (e) => {
    setPlayer2Name(e.target.value)
  }

  let navigate = useNavigate();
  function handleClick() {
    if (player1Name.trim() === '' || player2Name.trim() === '') {
      alert('You need to have a friend to play')
      return
    }

    setPlayer1(player1Name)
    setPlayer2(player2Name)

    navigate("/gameboard");
  }
  return (

  <div>
    <p className='memory-title'>Memory</p>
    <ExitGameButton />
    <p className='play-title'>Are you ready to play?</p>
    <div className='players'>
      <PlayerNameInput imagePath='/images/Player1.png' inputPlaceholder='Name of player 1' onChange={handlePlayer1NameChange} />
      <PlayerNameInput imagePath='/images/Player2.png' inputPlaceholder='Name fo player 2' onChange={handlePlayer2NameChange} />
    </div>
    <div className='play-button-contaner'>
      <button className='play-button' onClick={handleClick}>Let's Play</button>
    </div>
  </div>
  )
}