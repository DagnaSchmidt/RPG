import Fetch from "./Fetch"; 

const CharacterSelection = () => {
    return (
        <div className="characters-selection-body">
        <h1 className="title">Choose your Pokemon</h1>
        <Fetch />
        </div>
    );
};

export default CharacterSelection;