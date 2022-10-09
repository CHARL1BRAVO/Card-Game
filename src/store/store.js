import create from 'zustand'
import { persist } from 'zustand/middleware'

const useGameStore = create(
  persist(
    (set, get) => ({
      player1Name: '',
      player2Name: '',
      player1Score: 0,
      player2Score: 0,
      gameInProgress: false,

      increasePlayer1Score: () => set({ player1Score: get().player1Score + 1 }),
      increasePlayer2Score: () => set({ player2Score: get().player2Score + 1 }),
      setPlayer1Name: (name) => set({ player1Name: name}),
      setPlayer2Name: (name) => set({ player2Name: name}),

    }),
    {
      name: 'game-storage',
    }
  )
)

export {
    useGameStore
}