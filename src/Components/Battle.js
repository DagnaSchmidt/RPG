import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
//This pokemonImg will be removed once the actual images populated through the state
import pokemonImg from "../assets/images/pokemon.gif";

const Battle = ({name, logOut, characterName, characterLifePoints, characterImage, opponentName, opponentLifePoints, score, setScore, opponentImage, battlesWon, setBattlesWon, battlesLost, setBattlesLost, setCharacterLifePoints, setOpponentLifePoints }) => {
    
    const [characterLP, setCharacterLP] = useState(characterLifePoints);
    const [opponentLP, setOpponentLP] = useState(opponentLifePoints);
    const [currentPlayer, setCurrentPlayer] = useState(characterName);
    const getRandomNumber = () => {
        return Math.floor(Math.random() * 20);
    }
    const fight = () => {
        if (currentPlayer === characterName) {
            setOpponentLP(opponentLP - getRandomNumber());
            setOpponentLifePoints(opponentLP)
        }
        else {
            setCharacterLP(characterLP - getRandomNumber());
        }
    }

    const heal = () => {
        if (currentPlayer === characterName) {
            setCharacterLP(characterLP + getRandomNumber());
        }
        else {
            setOpponentLP(opponentLP + getRandomNumber());
        }
    }

    const [isOver, setIsOver] = useState(false);
    const [won, setWon] = useState();
    useEffect(() => {
        if(characterLP <= 0 || opponentLP <= 0){
            setIsOver(true)
        }
        if(characterLP <= 0){
            setBattlesLost(battlesLost -1)
            setCharacterLifePoints(-10)
            setWon(false)
        }
        if(opponentLP <= 0){
            setBattlesWon(battlesWon +1)
            setScore(score +1)
            setOpponentLifePoints(-10)
            setWon(true)
        }
    }, [characterLP, opponentLP])

    return (
        <section>
            {isOver ? 
            <div className="welcome">
                    {name !== "" ? 
                    <div>
                        <h3>{`You ${won ? "won!" : "lost!"}`}</h3>
                        <h5>Your current stats:</h5>
                        <p>Total points: {score}</p>
                        <p>Battles won: {battlesWon}</p>
                        <p>Battles lost: {battlesLost}</p>
                        <button className='welcome-btn'>
                            <Link className='btn-link' to="/characterselection">Start new adventure</Link>
                        </button>
                        <button onClick={logOut} className='welcome-btn btn-link'>Log out</button>
                    </div>
                    :
                    <div className='welcome'>
                        <h4>You are logged out!</h4>
                        <button className='welcome-btn btn-link'>
                            <Link to="/">return</Link>
                        </button>
                    </div>
                    } 
            </div>
            : 
            <div>
                <h1 className='battle-heading'>Pokemon Battle</h1>
            <div className='container-battle'>
                <div className='container-battle-child'>
                    <div>User Name: {characterName}</div>
                    <div>User Life points: {characterLP}</div>
                    <img src={pokemonImg} alt="pokemon pic" />
                </div>
                <div className='container-battle-child'>
                    <div>Opponent Name: {opponentName}</div>
                    <div>Opponent Life points: {opponentLP}</div>
                    <img src={pokemonImg} alt="pokemon pic" />
                </div>
            </div>

            <div className='battle-btns'>
                <Button className='battle-btn' onClick={fight}>
                    <Link className='btn-link'>Fight</Link>
                </Button>
                <Button className='battle-btn' onClick={heal}>
                    <Link className='btn-link'>Heal</Link>
                </Button>
            </div>
            </div>} 
        </section>
    );
};

export default Battle;