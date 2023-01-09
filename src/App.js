import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './Components/Welcome';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import NewAdventure from './Components/NewAdventure';
import UserMenu from "./Components/UserMenu";
import "./styles/Welcome.css";

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

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/login' element={<LogIn name={name} setName={setName} password={password} setPassword={setPassword} score={score} setScore={setScore} battlesWon={battlesWon} setBattlesWon={setBattlesWon} battlesLost={battlesLost} setBattlesLost={setBattlesLost} usersList={usersList} setUsersList={setUsersList} logOut={logOut} />} />
          <Route path='/signup' element={<SignUp name={name} setName={setName} password={password} setPassword={setPassword} score={score} setScore={setScore} battlesWon={battlesWon} setBattlesWon={setBattlesWon} battlesLost={battlesLost} setBattlesLost={setBattlesLost} usersList={usersList} setUsersList={setUsersList} logOut={logOut} />} />
          <Route path='/newadventure' element={<NewAdventure />} />
          <Route path='/usermenu' element={<UserMenu logOut={logOut}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
