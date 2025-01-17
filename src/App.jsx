import {useState} from 'react'
function App() {
  const [contact, setContact] = useState({
    firstName:'John',
    lastName:'Doe',
    phone:'702-555-1212',
    email:'name@example.com',
    isFavorite: false
  })

  function toggleFavorite(){
    alert('Toggle Favorite')
  }
  return (
    <main>
      <article className='card'>
        <img  src='user.png' 
              alt='User profile pic of John Doe'
              className='avatar' 
        />
        <div className='info'>
          <button
              onClick={toggleFavorite}
              aria-pressed={false}
              className='favorite-button'
          >
            <img  src='star-empty.png' 
                  alt='empty star icon'
                  className='favorite'
            />

          </button>
          <h2 className='name'>
            John Doe
          </h2>
          <p className='phone'>702-555-1212</p>
          <p className='email'>name@example.com</p>
        </div>
      </article>
    </main>
  )
}

export default App
