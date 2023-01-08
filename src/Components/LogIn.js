import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = ({name, setName, password, setPassword, score, setScore, battlesWon, setBattlesWon, battlesLost, setBattlesLost, usersList, setUsersList, logOut}) => {
  const [formData, setFormData] = React.useState(
    {
      name: "", 
      password: "", 
    }
  )

  function handleChange(event){
    const {name, value} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name] : value
      }
    })
  }

  const [notLoggedIn, setNotLoggedIn] = React.useState(true)

  function handleSubmit(event){
    event.preventDefault();

    const foundUser = usersList.filter((user) => user.name === formData.name && user.password === formData.password)
    const newUsersList = usersList.filter((user) => user.name !== formData.name)
    setUsersList(newUsersList);

    setName(foundUser[0].name);
    setPassword(foundUser[0].password)
    setScore(foundUser[0].score)
    setBattlesWon(foundUser[0].battlesWon)
    setBattlesLost(foundUser[0].battlesLost)

    setNotLoggedIn(false)

    console.log(foundUser)
    console.log(usersList)
  }
  
  return (
    <section>
      {notLoggedIn ? <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Enter username</label>
        <input
          id='username'
          name='name'
          type='text'
          placeholder='type your username here'
          onChange={handleChange} 
        />
        <label htmlFor='password'>Enter password</label>
        <input
          id='password'
          name='password'
          type='text' 
          placeholder='type your password here'
          onChange={handleChange}
        />
        <button>Log In</button>
      </form>
      :
      <div>
        {name !== "" && <div>
          <h3>Welcome back {name}!</h3>
          <h5>Your current stats:</h5>
          <p>Total points: {score}</p>
          <p>Battles won: {battlesWon}</p>
          <p>Battles lost: {battlesLost}</p>
          <button>
            <Link to="/newadventure">Start new adventure</Link>
          </button>
          <button onClick={logOut}>Log out</button>
        </div>  }
      </div> }
      <button>
        <Link to="/">return</Link>
      </button>
    </section>
  )
}

export default LogIn