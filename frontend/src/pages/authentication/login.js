import React from 'react'
import {Link} from 'react-router-dom'
import './login.scss'



const login = () => {
  return (
    <div className='login'>
        <div className="app">
        <div className="bg"></div>
       
        <form className='form' >
          <header>
            <label htmlFor="file">
              <img className="profileimg" src={ "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} />
            </label>
          </header>
          <input
     
            style={{ display: "none" }}
            type="file"
            name="file"
            id="file"
           
          />

          <div className="inputs">
            <input
              type="text"
              placeholder="username"
             
            />
            <input
              type="password"
              placeholder="password"
             
            />

            <p className="light">
              <Link to="">Forgot username?</Link>
            </p>
            <button className="submit" type="submit">
              Continue
            </button>
          </div>
        </form>

        <footer>
          <p>
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </footer>
      </div>
    </div>
  )
}

export default login
