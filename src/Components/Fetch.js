import { useState, useEffect } from "react";

const pokemonsContainer = {
    pokemons: null
}

const Fetch = (props) => {
    const [characters, setCharacters] = useState();
    const getCharacters = async () => {
        const randomNumber = generateRandomNumber();
        const url = getUrl(6, randomNumber);
        const response = await fetch(url);
        const json = await response.json();
        const charactersWithoutImages = json.results 
   
        let charactersWithImages = null;
        charactersWithImages = await Promise.all(
            charactersWithoutImages.map(async character => {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${character.name}`)
                const json = await response.json()

                return {
                    id  : json.id,
                    name: character.name, 
                    image: json.sprites.front_default,
                    lifePoints: json.base_experience
                }
            })
        )

        setCharacters(charactersWithImages)
    };

    const generateRandomNumber = () => {
        const number = Math.floor(Math.random() * 1000);
        return number
    };

    function getUrl(limit, offset) {
        return `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
    }

    useEffect (() => {
        getCharacters();
    }, []);


    return (

    <div className="characters">
        <div className="characters-greed">
            {characters && characters.map((character) => 
                <div>
                    <p key={character.id} onClick={()=>props.getPokemon(character)}>
                        <div className="container-characters">
                        {character.name}
                        <img src={character.image} alt=""></img>
                        </div>
                    </p>            
                </div>
            )}
        </div>
    </div>
)}

export default Fetch;