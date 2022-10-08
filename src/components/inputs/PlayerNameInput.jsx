import '../../styles/PlayerNameInput.css'

export default function PlayerNameInput(props) {
  return (

  <div className='player-name-input-container'>
    <img src={`${props.imagePath}`} className='player-logo'></img>
    <input placeholder={`${props.inputPlaceholder}`} className='player-username-input' id='P1'></input>
  </div>
  )
}