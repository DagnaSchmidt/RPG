import React from 'react';
import { Link } from 'react-router-dom';
import CharacterSelection from './CharacterSelection';
import Battle from './Battle';

const NewAdventure = ({ name }) => {
  return (
    <section className='welcome'>
      {name === "" ?
        <div>
          <h3>You are not logged in!</h3>
          <p>You need to log in to your account or create a new one to start new adventure</p>
          <button className='welcome-btn'>
            <Link className='btn-link' to="/login">Log In</Link>
          </button>
          <button className='welcome-btn'>
            <Link className='btn-link' to="/signup">Sign Up</Link>
          </button>
        </div>
        :
        <div>
          <div>
            <CharacterSelection />
          </div>
          <div>
            <Battle />
          </div>
        </div>}
    </section>

  )
}

export default NewAdventure;