import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './Components/Welcome';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import NewAdventure from './Components/NewAdventure';
import UserMenu from "./Components/UserMenu";
import CharacterSelection from "./Components/CharacterSelection";
import "./styles/CharacterSelection.css";
import "./styles/Welcome.css";
import "./styles/Battle.css";
import Battle from "./Components/Battle";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [score, setScore] = useState("");
  const [battlesWon, setBattlesWon] = useState("");
  const [battlesLost, setBattlesLost] = useState("");

  const [usersList, setUsersList] = useState([{name: "Dagna", password: "1234", score: 12, battlesWon: 12, battlesLost: 0}]);

  const logOut = () => {
    const newUser = {name: name, password: password, score: score, battlesWon: battlesWon, battlesLost: battlesLost}
    setUsersList(
      [
        ...usersList,
          newUser
      ]
    )
    setName("");
    setPassword("");
    setScore("");
    setBattlesWon("");
    setBattlesLost("");
    console.log(newUser, usersList)
  }

  const [characterName, setCharacterName] = useState("");
  const [characterLifePoints, setCharacterLifePoints] = useState(0);
  const [characterImage, setCharacterImage] = useState("");
  const [opponentName, setOpponentName] = useState("");
  const [opponentLifePoints, setOpponentLifePoints] = useState(0);
  const [opponentImage, setOpponentImage] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/login' element={<LogIn name={name} setName={setName} password={password} setPassword={setPassword} score={score} setScore={setScore} battlesWon={battlesWon} setBattlesWon={setBattlesWon} battlesLost={battlesLost} setBattlesLost={setBattlesLost} usersList={usersList} setUsersList={setUsersList} logOut={logOut} />} />
          <Route path='/signup' element={<SignUp name={name} setName={setName} password={password} setPassword={setPassword} score={score} setScore={setScore} battlesWon={battlesWon} setBattlesWon={setBattlesWon} battlesLost={battlesLost} setBattlesLost={setBattlesLost} usersList={usersList} setUsersList={setUsersList} logOut={logOut} />} />
          <Route path='/newadventure' element={<NewAdventure name={name} characterName={characterName} setCharacterName={setCharacterName} characterLifePoints={characterLifePoints} setCharacterLifePoints={setCharacterLifePoints} characterImage={characterImage} setCharacterImage={setCharacterImage} opponentName={opponentName} setOpponentName={setOpponentName} opponentLifePoints={opponentLifePoints} setOpponentLifePoints={setOpponentLifePoints} opponentImage={opponentImage} setOpponentImage={setOpponentImage} />} />
          <Route path='/usermenu' element={<UserMenu logOut={logOut}/>} />
          <Route path='/characterselection' element={<CharacterSelection />} />
          <Route path='/battle' element={<Battle name={name} characterName={characterName} setCharacterName={setCharacterName} characterLifePoints={characterLifePoints} setCharacterLifePoints={setCharacterLifePoints} characterImage={characterImage} setCharacterImage={setCharacterImage} opponentName={opponentName} setOpponentName={setOpponentName} opponentLifePoints={opponentLifePoints} setOpponentLifePoints={setOpponentLifePoints} opponentImage={opponentImage} setOpponentImage={setOpponentImage} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
