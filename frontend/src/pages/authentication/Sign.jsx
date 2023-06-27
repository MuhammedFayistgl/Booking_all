import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./sign.scss";
import { useDispatch, useSelector } from "react-redux";
import { Button, Popover, Whisper } from "rsuite";
import Otp from "./Otp";
import Profile from "./Profileimage/Profile";
import { setInputEmailHandler, setInputMobilNoHandler, setInputPasswordHandler, setInputUserNameHandler } from "../../Reducs/registerClice";
import { registeruser } from "../../Reducs/extraSlice";
import { Toaster } from "react-hot-toast";

const Sign = () => {
  //  let OtpStatusMsg = useSelector((STATE)=> { console.log("STATE",STATE.registr.OtpStatusMsg); })

  const dispach = useDispatch();
  const Navigate = useNavigate();
  const state = useSelector((state) => state.register);
  console.log(state?.Input);
  //** input Data Handler fun */
  if (state.otpStatus) {
    Navigate("/otp");
  }
  const inputDataHandler = (e) => {
    e.preventDefault();
    dispach(registeruser(state.Input));
  };

  return (
    <div>
      <Navbar wlcom={"Welcome"} />
      <Toaster />
      <div className="login">
        <div className="app">
          <div className="bg"></div>
          <form className="form" onSubmit={inputDataHandler}>
            {/* Profile Component */}
            <Profile />
            {}
            <div className="inputs">
              {state?.nameErr && <span className="errr"> User name Ender more than 2 digits</span>}

              <input
                required
                onChange={(e) => dispach(setInputUserNameHandler({ [e.target.name]: e.target.value }))}
                value={state?.Input?.UserName}
                name="UserName"
                type="text"
                placeholder="User Name"
                {...(state?.nameErr && { className: "inputErr" })}
              />

              {state?.emailErr && <span className="errr"> please enter valid Email</span>}
              <input
                {...(state?.emailErr && { className: "inputErr" })}
                required
                onChange={(e) => dispach(setInputEmailHandler({ [e.target.name]: e.target.value }))}
                value={state?.Input.Email}
                name="Email"
                type="email"
                placeholder="email address"
              />
              {state?.mobNoErr && <span className="errr"> Please Ender valid Mobile Number</span>}
              <input
                required
                onChange={(e) => dispach(setInputMobilNoHandler({ [e.target.name]: e.target.value }))}
                name="Number"
                type="number"
                placeholder="Mobile number "
                minLength={10}
                {...(state?.mobNoErr && { className: "inputErr" })}
              />
              {state?.passwordErr && <span className="errr"> Passwors must be more than 6 digits</span>}
              <input
                required
                onChange={(e) => dispach(setInputPasswordHandler({ [e.target.name]: e.target.value }))}
                value={state?.Input.password}
                name="password"
                type="password"
                placeholder="Password"
                {...(state?.passwordErr && { className: "inputErr" })}
              />

              <p className="light"></p>

              <Button
                loading={state?.loding}
                color="cyan"
                className="submit "
                disabled={state?.nameErr | state?.emailErr | state?.mobNoErr | state?.passwordErr | state?.Input}
                type="submit"
                appearance="primary"
              >
                Block
              </Button>
            </div>
          </form>

          <footer>
            <p>
              Have an account?
              <Link to={"/login"}>login </Link>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Sign;
