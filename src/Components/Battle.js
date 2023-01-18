import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";

const Battle = ({name, logOut, characterName, characterLifePoints, characterImage, opponentName, opponentLifePoints, score, setScore, opponentImage, battlesWon, setBattlesWon, battlesLost, setBattlesLost, setCharacterLifePoints, setOpponentLifePoints }) => {
    
    const [characterLP, setCharacterLP] = useState(characterLifePoints);
    const [opponentLP, setOpponentLP] = useState(opponentLifePoints);
    const [currentPlayer, setCurrentPlayer] = useState(characterName);
    const [currentTurn, setCurrentTurn] = useState("Your");
    const getRandomNumber = () => {
        return Math.floor(Math.random() * (30 - 20) + 20); 
    }
    const playTurn = async () => {
        if (currentPlayer === opponentName) {
            await new Promise(resolve => setTimeout(resolve, 1500));
            const actionNumber = getRandomNumber();
            if (actionNumber > 25) {
                heal();
            }
            else {
                fight();
            }
        }
    };

    const endTurn = () => {
        if (currentPlayer === characterName) {
            setCurrentPlayer(opponentName)
            setCurrentTurn("Opponent's")
        }
        else {
            setCurrentPlayer(characterName)
            setCurrentTurn("Your")
        }
    };

    const fight = () => {
        if (currentPlayer === characterName) {
            setOpponentLP(opponentLP - getRandomNumber());
        }
        else {
            setCharacterLP(characterLP - getRandomNumber());
        }
        endTurn()
    };

    const heal = () => {
        if (currentPlayer === characterName) {
            setCharacterLP(characterLP + getRandomNumber());
        }
        else {
            setOpponentLP(opponentLP + getRandomNumber());
        }
        endTurn()
    }

    const [isOver, setIsOver] = useState(false);
    const [won, setWon] = useState();
    useEffect(() => {
        if (characterLP <= 0 || opponentLP <= 0){
            setIsOver(true)
        }
        if (characterLP <= 0){
            setBattlesLost(battlesLost -1)
            setCharacterLifePoints(-10)
            setWon(false)
        }
        if (opponentLP <= 0){
            setBattlesWon(battlesWon +1)
            setScore(score +1)
            setOpponentLifePoints(-10)
            setWon(true)
        }
        if (!isOver) {
            playTurn()
        }
    }, [currentPlayer])

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
                        <h4>User Name: <b>{characterName}</b></h4>
                        <h4>User Life points: <b>{characterLP}</b></h4>
                        <img src={characterImage} alt="pokemon pic" />
                    </div>
                    <div>
                        <h4>{currentTurn} turn</h4>
                    </div>
                    <div className='container-battle-child'>
                        <h4>Opponent Name: <b>{opponentName}</b></h4>
                        <h4>Opponent Life points: <b>{opponentLP}</b></h4>
                        <img src={opponentImage} alt="pokemon pic" />
                    </div>
                </div>

                <div className='battle-btns'>
                    <Button className='welcome-btn btn-link' onClick={fight} disabled={currentPlayer === opponentName}>
                        Fight
                    </Button>
                    <Button className='welcome-btn btn-link' onClick={heal} disabled={currentPlayer === opponentName}>
                        Heal
                    </Button>
                </div>
            </div>} 
        </section>
    );
};

export default Battle;