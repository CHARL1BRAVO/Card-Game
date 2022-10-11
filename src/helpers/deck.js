var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function createDeck() {
  let deck = [];

  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      let color = suits[i] === "spades" || suits[i] === "clubs" ? "black" : "red";
      let frontImage = `${values[x]}_${suits[i]}.png`;

      let card = {
        value: values[x],
        suit: suits[i],
        color: color,
        backImage: "Card_Back.png",
        frontImage: frontImage,
        isFlipped: false,
      };

      deck.push(card);
    }
  }

  let blackJoker = {
    value: "Joker",
    suit: "Joker",
    color: "black",
    backImage: "Card_Back.png",
    frontImage: "Joker_1.png",
    isFlipped: false,
  };

  let redJoker = {
    value: "Joker",
    suit: "Joker",
    color: "red",
    backImage: "Card_Back.png",
    frontImage: "Joker_2.png",
    isFlipped: false,
  };

  deck.push(blackJoker, redJoker);

  return deck;
}

function shuffleDeck(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export { createDeck, shuffleDeck };
