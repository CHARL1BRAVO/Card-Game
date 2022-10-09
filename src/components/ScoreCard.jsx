import '../styles/ScoreCard.css'

export default function ScoreCard(props) {
  return (

  <div className='score-card-container'>
    <img src={`${props.imagePath}`} className='player-score-card-logo' alt='Score Card'></img>
    <div className='player-name'>
        <p>CHARL1BRAVO</p>
    </div>
    <div className='score'>
        <p>SCORE: 100</p>
    </div>
  </div>
  )
}