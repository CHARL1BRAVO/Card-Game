import "../styles/ScoreCard.css";

export default function ScoreCard(props) {
  return (
    <div className="score-card-container">
      <img src={`${props.imagePath}`} className="player-score-card-logo" alt="Score Card"></img>
      <div className="player-name-container">
        <p className="player-name">{props.playerName}</p>
      </div>
      <div className="score">
        <p>SCORE: {props.score}</p>
      </div>
    </div>
  );
}
