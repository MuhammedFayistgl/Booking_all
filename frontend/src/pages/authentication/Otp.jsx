import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import "./sign.scss";
import { Toaster } from "react-hot-toast";
import {  setInputOtpHandler } from "../../Reducs/registerClice";
import { Button } from "rsuite";
import { otpverificationserver } from "../../Reducs/extraSlice";

const Otp = () => {
  const navigate = useNavigate();
  const state = useSelector((state) => state.register);
  const dispach = useDispatch();
  if (state.otpVerification) {
    navigate("/login");
  }
  //** */
  const HandleAlldatasubmit = (e) => {
    e.preventDefault();

    // navigate('/login')
  };
  return (
    <>
      <Toaster />
      <div>
        <div className="login">
          <div className="OTPapp">
            <div className="OTPbg"></div>
            <form className="form" onSubmit={HandleAlldatasubmit}>
              <div className="OTPinputs">
                <input
                  required
                  onChange={(e) => {
                    dispach(setInputOtpHandler(e.target.value));
                  }}
                  name="Otp"
                  type="number"
                  placeholder="OTP "
                  minLength={10}
                />

                <p className="light"></p>
                {!state?.otpVerification && <span className="errr">OTP not mach try againe</span>}

                <Button
                  color="cyan"
                  className="submit"
                  disabled={!state?.otpStatus}
                  type="submit"
                  appearance="primary"
                  onClick={() => dispach(otpverificationserver(state))}
                >
                  Submit OTP
                </Button>
              </div>
            </form>

            <footer>
              <p>
                resend OTP
                <Link to={"/login"}>login </Link>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
