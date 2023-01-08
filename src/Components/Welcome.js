import React from 'react'
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <section>
      <img />
      <h1>Pokemon Battles</h1>
      <button>
        <Link to="/login">Log In</Link>
      </button>
      <button>
        <Link to="/signin">Sign In</Link>
      </button>
      <button>
        <Link to="/newadventure">New Adventure</Link>
      </button>
    </section>
  )
}

export default Welcome;