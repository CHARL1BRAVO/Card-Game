import ExitGameButton from "../components/buttons/ExitGameButton";
import ScoreCard from "../components/ScoreCard";
import Card from "../components/Card";
import "../styles/GameBoard.css";
import { useGameStore } from "../store/store";
import PlayerTurn from "../components/PlayerTurn";
import { useEffect, useState } from "react";
import ResetButton from "../components/buttons/ResetButton";
import { useNavigate } from "react-router-dom";

export default function GameBoard() {
  const [preventFlipping, setPreventFlipping] = useState(false);
  const [isMatch, setIsMatch] = useState(false);

  const player1Name = useGameStore((state) => state.player1Name);
  const player2Name = useGameStore((state) => state.player2Name);
  const player1Turn = useGameStore((state) => state.player1Turn);
  const player1Score = useGameStore((state) => state.player1Score);
  const player2Score = useGameStore((state) => state.player2Score);
  const flipCard = useGameStore((state) => state.flipCard);
  const setCardsAsRemoved = useGameStore((state) => state.setCardsAsRemoved);
  const flipCardsBack = useGameStore((state) => state.flipCardsBack);
  const increasePlayer1Score = useGameStore((state) => state.increasePlayer1Score);
  const increasePlayer2Score = useGameStore((state) => state.increasePlayer2Score);
  const togglePlayerTurn = useGameStore((state) => state.togglePlayerTurn);

  const deck = useGameStore((state) => state.deck);
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      const cardsLeftCount = deck.filter((c) => !c.removed).length
      if(cardsLeftCount === 0) {
        navigate('/leaderboard')
    } 
    },2000);
    setPreventFlipping(false);

    const flippedCards = deck.filter((card) => card.isFlipped);
    if (flippedCards.length === 2) {
      setPreventFlipping(true);
      const [card1, card2] = flippedCards;

      if (evaluateMatch(card1, card2)) {
        setTimeout(async () => {
          setCardsAsRemoved([card1, card2]);
          flipCardsBack();
          if (player1Turn) {
            increasePlayer1Score();
            setIsMatch(true);

            setTimeout(() => {
              setIsMatch(false);
            }, 1000);
          } else {
            increasePlayer2Score();
            setIsMatch(true);

            setTimeout(() => {
              setIsMatch(false);
            }, 1000);
          }
        }, 1000);
      } else {
        setTimeout(() => {
          flipCardsBack();
          togglePlayerTurn();
        }, 1000);
      }
    }
  }, [
    deck,
    flipCardsBack,
    increasePlayer1Score,
    increasePlayer2Score,
    player1Turn,
    setCardsAsRemoved,
    togglePlayerTurn,
    isMatch,
    navigate,
  ]);

  const evaluateMatch = (card1, card2) => {
    if (
      (card1.value === card2.value && card1.color === card2.color) ||
      (card1.value === "Joker" && card2.value === "Joker")
    ) {
      return true;
    } else {
      return false;
    }
  };
  const handleClick = (card) => {
    if (card.isFlipped || preventFlipping) {
      return;
    }

    flipCard(card);
  };

  return (
    <div>
      <p className="memory-title">Memory</p>
      <ExitGameButton />
      <ResetButton />
      <div className="player-1">
        <ScoreCard imagePath="/images/Player1.png" playerName={player1Name} score={player1Score} />
        {player1Turn && <PlayerTurn />}
      </div>
      <div className="player-2">
        <ScoreCard imagePath="/images/Player2.png" playerName={player2Name} score={player2Score} />
        {!player1Turn && <PlayerTurn />}
      </div>

      {isMatch === true ? (
        // If true
        <div className="board-flipped">
          <div className="cards-flipped">
            {deck.map((card, i) => (
              <Card card={card} key={i} onClick={() => handleClick(card)} />
            ))}
          </div>
        </div>
      ) : (
        // If false
        <div className="board">
          <div className="cards">
            {deck.map((card, i) => (
              <Card card={card} key={i} onClick={() => handleClick(card)} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
