import {useState} from 'react'

export default function App() {
  const [contact, setContact] = useState({
    firstName:'John',
    lastName:'Doe',
    phone:'702-555-1212',
    email:'name@example.com',
    isFavorite: false
  })

  let starIcon = contact.isFavorite ? 'star-filled.png' : 'star-empty.png'
  let starAlt = contact.isFavorite ? 'filled star icon' : 'empty star icon'

  function toggleFavorite(){
    alert('Toggle Favorite')
  }

  return (
    <main>
      <article className='card'>
        <img  src='user.png' 
              alt={`User profile pic of ${contact.firstName} ${contact.lastName}`}
              className='avatar' 
        />
        <div className='info'>
          <button
              onClick={toggleFavorite}
              aria-pressed={contact.isFavorite}
              aria-label={contact.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
              className='favorite-button'
          >
            <img  src = {starIcon} 
                  alt={starAlt}
                  className='favorite'
            />

          </button>
          <h2 className='name'>
            {contact.firstName} {contact.lastName}
          </h2>
          <p className='phone'>{contact.phone}</p>
          <p className='email'>{contact.email}</p>
        </div>
      </article>
    </main>
  )
}
