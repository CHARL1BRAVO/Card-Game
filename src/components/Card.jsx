import { useState } from 'react'
import '../styles/Card.css'

export default function Card(props) {
  const [isFlipped,setIsFlipped] = useState(false)
  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }
  return (

  <div className='card-container' onClick={handleClick}>
    <img src={isFlipped ? `/images/cards/${props.card.frontImage}`:`/images/cards/${props.card.backImage}`} className='card-logo' alt='Card'></img>
  </div>
  )
}