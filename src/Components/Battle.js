import React from 'react'
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
//This pokemonImg will be removed once the actual images populated through the state
import pokemonImg from "../assets/images/pokemon.gif";

const Battle = ({ characterName, characterLifePoints, characterImage, opponentName, opponentLifePoints, opponentImage }) => {
    return (
        <section >
            <h1 className='battle-heading'>Pokemon Battle</h1>
            <div className='container-battle'>
                <div className='container-battle-child'>
                    <div>User Name: {characterName}</div>
                    <div>User Life points: {characterLifePoints}</div>
                    <img src={pokemonImg} alt="pokemon pic" />
                </div>
                <div className='container-battle-child'>
                    <div>Opponent Name: {opponentName}</div>
                    <div>Opponent Life points: {opponentLifePoints}</div>
                    <img src={pokemonImg} alt="pokemon pic" />
                </div>
            </div>

            <div className='battle-btns'>
                <Button className='battle-btn'>
                    <Link className='btn-link'>Fight</Link>
                </Button>
                <Button className='battle-btn'>
                    <Link className='btn-link'>Heal</Link>
                </Button>
            </div>
        </section>
    );
};

export default Battle;