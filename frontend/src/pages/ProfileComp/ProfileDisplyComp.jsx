import { Box } from "@mui/material";
import React, { useEffect } from "react";
import "./profile.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginVerification } from "../../Reducs/extraSlice";
import { gerUser } from "../../utils/BookingHelper";
const ProfileDisplyComp = () => {
	const Dispatch = useDispatch();
	const  userData = useSelector((state) => { return state.loginSlice.user });
	console.log(userData);
	return (
		<>
			<main>
				<div className="profil__card">
					<img src={`http://localhost:5000/${userData?.profileUrl}`} alt="User image" className="card__image" />
					<div className="card__text">
						<h2>{userData?.UserName}</h2>
						<p>I enjoy drinking a cup of coffee every day</p>
					</div>
					<ul className="card__info">
						<li>
							<span className="card__info__stats">172</span>
							<span>posts</span>
						</li>
						<li>
							<span className="card__info__stats">47</span>
							<span>followers</span>
						</li>
						<li>
							<span className="card__info__stats">20</span>
							<span>following</span>
						</li>
					</ul>
					<div className="card__action">
						<button className="card__action__button card__action--follow">follow</button>
						<button className="card__action__button card__action--message">message</button>
					</div>
				</div>
			</main>
		</>
	);
};

export default ProfileDisplyComp;
