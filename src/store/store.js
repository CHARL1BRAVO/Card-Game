import create from 'zustand'
import { persist } from 'zustand/middleware'
import produce from 'immer'

const useGameStore = create(
  persist(
    (set, get) => ({
      player1Name: '',
      player2Name: '',
      player1Score: 0,
      player2Score: 0,
      deck: [],
      playerTurn: '',
      gameInProgress: false,
      cardsFlippedForTurn: [],

      increasePlayer1Score: () => set({ player1Score: get().player1Score + 1 }),
      increasePlayer2Score: () => set({ player2Score: get().player2Score + 1 }),
      setPlayer1Name: (name) => set({ player1Name: name}),
      setPlayer2Name: (name) => set({ player2Name: name}),
      setDeck: (deck) => set({ deck: deck}),
      setPlayerTurn: (player) => set({ playerTurn: player}),
      addFlippedCard: (card) => set({cardsFlippedForTurn: [...get().cardsFlippedForTurn,card]}),
      clearFlippedCards: () => set({cardsFlippedForTurn: []}),
      flipCard: (card) =>
      set(
      produce((draft) => {
        const crd = draft.deck.find((el) => el.value === card.value && el.suit === card.suit && el.color === card.color);
        crd.isFlipped = !card.isFlipped;
      })
    ),

    }),
    {
      name: 'game-storage',
    }
  )
)

export {
    useGameStore
}