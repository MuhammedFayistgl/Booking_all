import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./login.scss";

import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import { setCookies, setloginPassword, setloginUsername } from "../../Reducs/LoginSlice";
import { Button } from "rsuite";
import { loginVerification, loginWithEmail } from "../../Reducs/extraSlice";
import { Toaster } from "react-hot-toast";
import { useCookies } from "react-cookie";

const Login = () => {
	const dispach = useDispatch();
	const navigate = useNavigate();
	const [cookies, setCookie] = useCookies();
	const state = useSelector((state) => state.loginSlice);
	console.log("state.cookie", state);
  if(state?.cookie){
    navigate(-1)
  }
  useEffect(() => {
    dispach(loginVerification())

  }, [])
  
	const submitHandler = (e) => {
    console.log('submited');
		e.preventDefault();
		dispach(loginWithEmail(state?.loginData));
    
	};
	return (
		<>
			<Navbar />
			<Toaster />

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
							{state?.emailErr && <span className="errr"> please enter valid Email</span>}
							<input
								required
								value={state?.Email}
								name="Email"
								type="text"
								placeholder="Email"
								onChange={(e) => dispach(setloginUsername({ [e.target.name]: e.target.value }))}
							/>
							<input
								required
								value={state?.Password}
								name="password"
								type="password"
								placeholder="password"
								onChange={(e) => dispach(setloginPassword({ [e.target.name]: e.target.value }))}
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
