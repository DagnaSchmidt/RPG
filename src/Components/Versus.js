import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Versus = ({yourPokemon, oppoPokemon}) => {
    return (
        <div>
            <h1 className="versus-heading">Participants</h1>
            <div className="versus">
                <div>
                    <h1 className="versus-text">{yourPokemon.name}</h1>
                    <img className="versus-img" src={yourPokemon.image} alt="pokemon pic" />
                </div>
                <h1 className="middle-versus">V/S</h1>
                <div>
                    <h1 className="versus-text">{oppoPokemon.name}</h1>
                    <img className="versus-img" src={oppoPokemon.image} alt="pokemon pic" />
                </div>
            </div>
            <div className="versus-btn">
                <Button className="welcome-btn">
                    <Link className="btn-link" to="/battle">Start Battle</Link>
                </Button>
            </div>
        </div>
    );
};

export default Versus;