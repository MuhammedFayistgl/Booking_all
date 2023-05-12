import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import "./sign.scss";
import { useDispatch, useSelector } from "react-redux";
import {  registerUsers } from "../../Reducs/registerClice";
import Otp from "./Otp";

const Sign = () => {
  //  let OtpStatusMsg = useSelector((STATE)=> { console.log("STATE",STATE.registr.OtpStatusMsg); })
  const [OTP_Page, setOTP_Page] = useState(false);

  const [userData, setUserData] = useState({});

  const dispach = useDispatch();

  //** input Data Handler fun */



  const inputDataHandler = (e) => {
    e.preventDefault();

    // dispach(getOtp());
    dispach(registerUsers(userData));
    setOTP_Page(true);


  
  };

  return (
    <div>
      <Navbar wlcom={"Welcome"} />
      {!OTP_Page? 
        <div className="login">
        <div className=  "app" >
          <div className=  "bg"  ></div>
          <form className="form" onSubmit={inputDataHandler}>
            <header>
              <label htmlFor="file">
                <img
                  className="profileimg"
                  src={
                    userData.profilURL
                      ? userData.profilURL
                      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  }
                />
              </label>
            </header>
            <input
              style={{ display: "none" }}
              type="file"
              name="file"
              id="file"
              onChange={(e) =>
                setUserData({
                  ...userData,
                  profilURL: URL.createObjectURL(e.target.files[0]),
                })
              }
            />

            <div className=   "inputs" >
         
                  <input
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        [e.target.name]: e.target.value,
                      })
                    }
                    name="UserName"
                    type="text"
                    placeholder="User Name"
                  />
                  <input
                    required
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        [e.target.name]: e.target.value,
                      })
                    }
                    name="Email"
                    type="email"
                    placeholder="email address"
                  />
                  <input
                    required
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        [e.target.name]: e.target.value,
                      })
                    }
                    name="Number"
                    type="number"
                    placeholder="Mobile number "
                    minLength={10}
                  />
                  <input
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        [e.target.name]: e.target.value,
                      })
                    }
                    name="password"
                    type="password"
                    placeholder="Password"
                  />

              <p className="light"></p>
              <button className="submit " type="submit" onSubmit={inputDataHandler}>
                Continue
              </button>
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
      : 
      <Otp  fun={setOTP_Page} />
      }
    
    </div>
  );
};

export default Sign;
