import { useState, useEffect } from "react";

const pokemonsContainer = {
    pokemons: null
}

const Fetch = () => {
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
                    name: character.name, 
                    image: json.sprites.front_default
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
                    <p key={character.url}>
                        <div className="container-characters">
                        {character.name}
                        <img src={character.image}></img>
                        </div>
                    </p>            
                </div>
            )}
        </div>
    </div>
)}

export default Fetch;