import {useState} from 'react'
import Star from './Star.jsx'

export default function App() {
  
  const [contact, setContact] = useState({
    firstName:'John',
    lastName:'Doe',
    phone:'702-555-1212',
    email:'name@example.com',
    isFavorite: false
  })


  function toggleFavorite(){
    setContact(prevContact=>({
      ...prevContact,
      isFavorite:!prevContact.isFavorite
    }))  
  }

  return (
    <main>
      <article className='card'>
        <img  src='user.png' 
              alt={`User profile pic of ${contact.firstName} ${contact.lastName}`}
              className='avatar' 
        />
        <div className='info'>
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
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
