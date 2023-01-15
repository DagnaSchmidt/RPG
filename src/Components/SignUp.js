import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Error.css';

const SignUp = ({name, setName, password, setPassword, score, setScore, battlesWon, setBattlesWon, battlesLost, setBattlesLost, usersList, setUsersList, logOut}) => {
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

  const [error, setError] = React.useState(false)

  function handleSubmit(event){
    event.preventDefault();
    const names = usersList.map((item) => item.name);

    if(names.includes(formData.name)){
      setError(true)
    }else{
      setName(formData.name);
    setPassword(formData.password);
    setScore(0);
    setBattlesWon(0);
    setBattlesLost(0);
    setForm(false);
    }
  }

  return (
    <section className="welcome">
      {form ? 
      <div><form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column"}}>
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
        <button type='submit' className='welcome-btn btn-link'>
          Sign Up
        </button>
      </form>
      <button className='welcome-btn btn-link'>
        <Link to="/">return</Link>
      </button>
      <div className={`error-message ${error && "display"}`} style={{top: "200px", left: "400px"}} >
          <h3>This user name already exist!</h3>
          <button className='welcome-btn btn-link' onClick={() => setError(false)}>Return</button>
        </div>
      </div>
       : 
       <div>
        {name !== "" ? <div>
          <h3>Welcome {name}! Your account has been created.</h3>
          <h5>Your current stats:</h5>
          <p>Total points: {score}</p>
          <p>Battles won: {battlesWon}</p>
          <p>Battles lost: {battlesLost}</p>
          <button className='welcome-btn btn-link'>
            <Link to="/characterselection">Start new adventure</Link>
          </button>
          <button className='welcome-btn'>
            <Link className='btn-link' to="/usermenu">User menu</Link>
          </button>
          <button onClick={logOut} className='welcome-btn btn-link'>Log out</button>
        </div> : 
        <div>
          <h4>You are logged out!</h4>
          <button className='welcome-btn btn-link'>
            <Link to="/">return</Link>
          </button>
        </div>
        }
        </div>
        }
      
    </section>
  )
}

export default SignUp;