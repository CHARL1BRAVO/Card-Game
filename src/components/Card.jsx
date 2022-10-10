import { useEffect, useState } from 'react'
import { useGameStore } from '../store/store'
import '../styles/Card.css'

export default function Card(props) {
  const flipCard = useGameStore((state) => state.flipCard )
  const deck = useGameStore((state) => state.deck)
  const removeCardsFromDeck = useGameStore((state) => state.removeCardsFromDeck)
  const flipCardsBack = useGameStore((state) => state.flipCardsBack)
  
  const [preventFlip, setPreventFlip] = useState(false)

  useEffect(() => {
    const flippedCards = deck.filter((card) => card.isFlipped)
    setPreventFlip(false)

    if(flippedCards.length === 2) {
      setPreventFlip(true)
      const [card1, card2] = flippedCards

      if(evaluateMatch(card1, card2)) {
        setTimeout(() => {
          removeCardsFromDeck([card1, card2])
        }, 1000)
      }else {
        setTimeout(() => {
          flipCardsBack()
        }, 1000)
      }
    }
  }, [deck])

  const evaluateMatch = (card1, card2) => {
    if((card1.value === card2.value && card1.color === card2.color) || (card1.value === 'Joker' && card2.value === 'Joker')) {
      return true
    }else {
      return false
    }
  }

  const handleClick = () => {
    if(props.card.isFlipped) {
      return
    }

    if(!preventFlip) {
      flipCard(props.card)
    }
  }
  return (

  <div className='card-container' onClick={handleClick}>
    <img src={props.card.isFlipped ? `/images/cards/${props.card.frontImage}`:`/images/cards/${props.card.backImage}`} className='card-logo' alt='Card'></img>
  </div>
  )
}