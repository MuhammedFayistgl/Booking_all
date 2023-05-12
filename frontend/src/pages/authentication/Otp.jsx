import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { sumitDetails } from "../../Reducs/registerClice";

import './sign.scss'

const Otp = ({setOTP_Page}) => {
    const navigate = useNavigate()

    const dispach = useDispatch();
    const [otp, setOtp] = useState({});

    //** */
    const HandleAlldatasubmit = (e)=>{
        e.preventDefault();
        dispach(sumitDetails(otp))
  
        navigate('/login')
      
       }
  return (
    <>
      <div>
       
        <div className="login">
          <div className="OTPapp">
            <div className="OTPbg"></div>
            <form className="form"  onSubmit={HandleAlldatasubmit} >
              <div className="OTPinputs">
                <input
                  required
                  onChange={(e) =>
                    setOtp({
                      ...otp,
                      [e.target.name]: e.target.value,
                    })
                  }
                  name="Otp"
                  type="number"
                  placeholder="OTP "
                  minLength={10}
                />

                <p className="light"></p>
                <button className="submit " type="submit" onClick={HandleAlldatasubmit} >
                  Submit  OTP
                </button>
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
