import create from "zustand";
import { persist } from "zustand/middleware";
import produce from "immer";

const DEFAULT_STATE = {
  player1Name: "",
  player2Name: "",
  player1Score: 0,
  player2Score: 0,
  deck: [],
  player1Turn: true,
  gameInProgress: false,
};

const useGameStore = create(
  persist(
    (set, get) => ({
      ...DEFAULT_STATE,

      increasePlayer1Score: () => set({ player1Score: get().player1Score + 1 }),
      increasePlayer2Score: () => set({ player2Score: get().player2Score + 1 }),
      setPlayer1Name: (name) => set({ player1Name: name }),
      setPlayer2Name: (name) => set({ player2Name: name }),
      setDeck: (deck) => set({ deck: deck }),
      togglePlayerTurn: () => set({ player1Turn: !get().player1Turn }),
      flipCard: (card) =>
        set(
          produce((draft) => {
            const crd = draft.deck.find(
              (el) => el.value === card.value && el.suit === card.suit && el.color === card.color
            );
            crd.isFlipped = !card.isFlipped;
          })
        ),
      setCardsAsRemoved: (cards) =>
        set(
          produce((draft) => {
            cards.forEach((c) => {
              const crd = draft.deck.find((el) => el.value === c.value && el.suit === c.suit && el.color === c.color);
              crd.removed = true;
            });
          })
        ),
      flipCardsBack: () =>
        set(
          produce((draft) => {
            draft.deck = get().deck.map((c) => {
              return {
                ...c,
                isFlipped: false,
              };
            });
          })
        ),
      exitGameReset: () => set(DEFAULT_STATE),
      resetGame: () => set({ player1Score: 0, player2Score: 0, player1Turn: true }),
    }),
    {
      name: "game-storage",
    }
  )
);

export { useGameStore };
