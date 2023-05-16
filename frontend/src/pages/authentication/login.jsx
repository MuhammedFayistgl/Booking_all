import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./login.scss";
import { registerUsers } from "../../Reducs/registerClice";
import { useDispatch } from "react-redux";
import Navbar from "../../components/navbar/Navbar";

const Login = () => {
  const dispach = useDispatch();
  const [input, setInput] = useState({});

  //! funtions

  const submitHandler = (e) => {
    // dispach(registerUsers(input));
    e.preventDefault();

    // setInput({})
  };
  return (
    <>
      <Navbar />
      <div className="login-login">
        <div className="login-app">
          <div className="login-bg"></div>
          <form className="login-form" onSubmit={submitHandler}>
            <header>
              <label htmlFor="file">
                <img
                  className="login-profileimg"
                  src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
                />
              </label>
            </header>
            <input style={{ display: "none" }} type="file" name="file" id="file" />

            <div className="login-inputs">
              <input
                name="username"
                type="text"
                placeholder="Username"
                onChange={(e) =>
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <input
                name="password"
                type="password"
                placeholder="password"
                onChange={(e) =>
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  })
                }
              />

              <button className="login-submit" type="submit">
                Continue
              </button>
            </div>
          </form>

          <footer>
            <p>
              Don't have an account?<Link to="/signUp">Sign Up </Link>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Login;
