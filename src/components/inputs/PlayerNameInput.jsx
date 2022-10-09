import '../../styles/PlayerNameInput.css'

export default function PlayerNameInput(props) {
  return (

  <div className='player-name-input-container'>
    <img src={`${props.imagePath}`} className='player-logo' alt='Player Logo'></img>
    <input placeholder={`${props.inputPlaceholder}`} className='player-username-input' onChange={(e) => props.onChange(e)} id='P1' required></input>
  </div>
  )
}