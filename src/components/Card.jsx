import "../styles/Card.css";

export default function Card(props) {
  return (
    <div className="card-container" onClick={props.onClick}>
      <img
        src={props.card.isFlipped ? `/images/cards/${props.card.frontImage}` : `/images/cards/${props.card.backImage}`}
        className="card-logo"
        alt="Card"
      ></img>
    </div>
  );
}
