import { useGameStore } from '../store/store'
import '../styles/Card.css'

export default function Card(props) {
  const flipCard = useGameStore((state) => state.flipCard )
  const deck = useGameStore((state) => state.deck )



  const handleClick = () => {
    if(props.card.isFlipped) {
      return
    }
    flipCard(props.card)
    console.log(deck.filter((card) => card.isFlipped).length)

      }
  return (

  <div className='card-container' onClick={handleClick}>
    <img src={props.card.isFlipped ? `/images/cards/${props.card.frontImage}`:`/images/cards/${props.card.backImage}`} className='card-logo' alt='Card'></img>
  </div>
  )
}