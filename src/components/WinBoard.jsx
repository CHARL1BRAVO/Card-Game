import "../styles/WinBoard.css";

export default function WinBoard(props) {
  return (
  <div className="winner-contaner">
    <div className="winner-cup">
      {props.placement === '1st Place' && (<img src="/images/Cup.png" alt="goblet of fire"></img>)}
    </div>
    <div className={`${props.placement === '1st Place' ? 'victor' : ''} leader-board-container`}>
      <img src={`${props.imagePath}`} className="player-leaderboard-card-logo" alt="leader Card"></img>
      <div className="placement">
        <p>{props.placement}</p>
      </div>
      <div className="winboard-player-name-container">
        <p className="winboard-player-name">{props.playerName}</p>
      </div>
      <div className="winboard-score">
        <p>Score: {props.score}</p>
      </div>
    </div>
  </div>
  );
}
