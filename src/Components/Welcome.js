import React from 'react';
import { Link } from 'react-router-dom';
import welcomeImg from "../assets/images/pokemon.gif";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

const Welcome = () => {
  return (
    <section className="welcome">
      <h1 className='welcome-heading'>Pokemon Battles</h1>
      <img src={welcomeImg} alt="pokemon pic"/>
      <div className='welcome-btns'>
        <Button className='welcome-btn'>
          <Link className='btn-link' to="/login">Log In</Link>
        </Button>
        <Button className='welcome-btn'>
          <Link className='btn-link' to="/signup">Sign Up</Link>
        </Button>
        <Button className='welcome-btn'>
          <Link className='btn-link' to="/characterselection">New Adventure</Link>
        </Button>
      </div>
    </section>
  )
}

export default Welcome;