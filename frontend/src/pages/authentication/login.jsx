import React from "react";
import { Link } from "react-router-dom";

import "./login.scss";

import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import { setloginPassword, setloginUsername } from "../../Reducs/LoginSlice";
import { Button } from "rsuite";
import { loginWithUsername } from "../../Reducs/extraSlice";

const Login = () => {
  const dispach = useDispatch();
  const state = useSelector((state) => state.loginSlice);


  //! funtions

  const submitHandler = (e) => {
    e.preventDefault();
    dispach(loginWithUsername(state?.loginData));
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
                required
                value={state?.Username}
                name="username"
                type="text"
                placeholder="Username"
                onChange={(e) => dispach(setloginUsername(e.target.value))}
              />
              <input
                required
                value={state?.Password}
                name="password"
                type="password"
                placeholder="password"
                onChange={(e) => dispach(setloginPassword(e.target.value))}
              />
              <Button
                loading={state?.loading}
                color="cyan"
                className="login-submit"
                // disabled={state?.nameErr | state?.emailErr |state?.mobNoErr | state?.passwordErr | state?.Input }
                type="submit"
                appearance="primary"
              >
                Continue
              </Button>
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
