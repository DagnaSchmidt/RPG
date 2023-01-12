import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Fetch from "./Fetch"; 

const CharacterSelection = ({name, yourPokemon, setYourPokemon}) => {
    return (
        <>
        {name === "" ?
            <section className='welcome'>
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
            </section>
        :
        <div className="characters-selection-body">
            <h1 className="title">Choose your Pokemon</h1>
            <Fetch getPokemon={yourPokemon => setYourPokemon(yourPokemon)}/>

            {yourPokemon!==""?<div className="select-pokemon">

            <h1 className="versus-text">{yourPokemon.name}</h1>
            <img className="versus-img" src={yourPokemon.image} alt=""/>
            <Button className="welcome-btn">
                    <Link className="btn-link" to="/opponentselection">Next</Link>
            </Button>

            </div>
            :
            <h1 className="versus-text">Please select one character!</h1>}
        </div>
        }
        </>
    );
};

export default CharacterSelection;