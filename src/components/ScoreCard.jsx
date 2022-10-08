import '../styles/ScoreCard.css'

export default function ScoreCard(props) {
  return (

  <div className='score-card-container'>
    <img src={`${props.imagePath}`} className='player-score-card-logo'></img>
  </div>
  )
}