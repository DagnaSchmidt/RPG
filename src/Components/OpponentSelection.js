import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Fetch from "./Fetch"; 

const OpponentSelection = ({oppoPokemon, setOppoPokemon}) => {

    // const [oppoPokemon, setOppoPokemon] = useState("");


    return (
        <div className="characters-selection-body">
            <h1 className="title">Choose your Opponent</h1>
            <Fetch getPokemon={oppoPokemon => setOppoPokemon(oppoPokemon)} />

            {oppoPokemon!==""?<div className="select-pokemon">

            <h1 className="versus-text">{oppoPokemon.name}</h1>
            <img className="versus-img" src={oppoPokemon.image} alt="" />
            <Button className="welcome-btn">
                <Link className="btn-link" to="/versus">Next</Link>
            </Button>
            
            </div>:
            <h1 className="versus-text">Please select one character!</h1>}
        </div>
    );
};

export default OpponentSelection;