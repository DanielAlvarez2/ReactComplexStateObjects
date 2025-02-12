export default function Star(props){

    let starIcon = props.isFilled ? 'star-filled.png' : 'star-empty.png'
    let starAlt = props.isFilled ? 'filled star icon' : 'empty star icon'
  
    return (
        <button
              onClick={props.handleClick}
              aria-pressed={props.isFilled}
              aria-label={props.isFilled ? 'Remove from favorites' : 'Add to favorites'}
              className='favorite-button'
          >
            <img  src = {starIcon} 
                  alt={starAlt}
                  className='favorite'
            />

          </button>
    )
}