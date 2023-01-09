import React from 'react'
import { Link } from 'react-router-dom';

const SignIn = ({name, setName, password, setPassword, score, setScore, battlesWon, setBattlesWon, battlesLost, setBattlesLost, usersList, setUsersList, logOut}) => {
  const [formData, setFormData] = React.useState(
    {
      name: "", 
      password: "", 
    }
  )

  const [form, setForm] = React.useState(true);
  
  function handleChange(event){
    const {name, value} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name] : value
      }
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    //create function to check if username already doesn't exist in database
    setName(formData.name);
    setPassword(formData.password);
    setScore(0);
    setBattlesWon(0);
    setBattlesLost(0);
    setForm(false);
  }

  return (
    <section>
      {form ? 
      <form onSubmit={handleSubmit}>
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
        <button type='submit'>
          Sign In
        </button>
      </form>
       : 
       <div>
        {name !== "" && <div>
          <h3>Welcome {name}! Your account has been created.</h3>
          <h5>Your current stats:</h5>
          <p>Total points: {score}</p>
          <p>Battles won: {battlesWon}</p>
          <p>Battles lost: {battlesLost}</p>
          <button>
            <Link to="/newadventure">Start new adventure</Link>
          </button>
          <button onClick={logOut}>Log out</button>
        </div>  }
        </div>
        }
      <button>
        <Link to="/">return</Link>
      </button>
    </section>
  )
}

export default SignIn;