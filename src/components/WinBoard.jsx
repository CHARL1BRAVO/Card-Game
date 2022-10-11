import "../styles/WinBoard.css";

export default function WinBoard(props) {
  return (
    <>
    {props.placement === '1st Place' && (<img src="/images/Cup.png"></img>)}
    <div className={`${props.placement === '1st Place' ? 'victor' : ''} leader-board-container`}>
      <img src={`${props.imagePath}`} className="player-score-card-logo" alt="leader Card"></img>
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
    </>
  );
}
