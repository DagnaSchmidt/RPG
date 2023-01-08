import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './Components/Welcome';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import NewAdventure from './Components/NewAdventure';
import "./styles/Welcome.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/newadventure' element={<NewAdventure />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
