import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import welcomeImg from "../assets/images/pokemon.gif";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

const UserMenu = ({logOut}) => {

  const [alert, setAlert] = useState(false);

  if (alert === false) {
    return (
        <section className="welcome">
            <h1 className='welcome-heading'>User Menu</h1>
            <div className="menu-text">
                <p className="memu-paragraph">The rules for playing the game are very simple.
                    Select one option from below. New Adventure takes you to play a new game.
                    Continue Adventure makes you to continue your previous game.
                    If you don't feel like playing you can exit the game by selecting the logout button.</p>
                <p className="memu-paragraph">After selecting one of the option from below excluding Logout,
                    you will be directed to Select cheracter page, where you will have 6 pokemons
                    available for you to choose one. After selecting your character, you have to select
                    your oponent. After selecting your pokemon character and opponent character.
                    You can click on the Start Battle button. Here the game starts. </p>
                <h2 className="menu-heading2">Happy Gaming!</h2>
            </div>
            <div className='welcome-btns'>
                <Button className='welcome-btn'>
                <Link className='btn-link' to="/continueadventure">Continue Adventure</Link>
                </Button>
                <Button className='welcome-btn'>
                <Link className='btn-link' to="/newadventure">New Adventure</Link>
                </Button>
                <Button className='welcome-btn'>
                <Link onClick={() => {setAlert(true); logOut()}} className='btn-link'>Log Out</Link>
                </Button>
            </div>
        </section>
    );

  } else {
        return (
            <div className="welcome">
                <h4 className="welcome-heading">You are logged out!</h4>
                <Button className="welcome-btn">
                    <Link className="btn-link" to="/">return</Link>
                </Button>
            </div>
        );
    }
}

export default UserMenu;