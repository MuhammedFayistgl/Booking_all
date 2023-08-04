import React, { lazy } from "react";

const Navbar = lazy(() => import("../../components/navbar/Navbar"));
const Footer = lazy(() => import("../../components/footer/Footer"));
const Header = lazy(() => import("../../components/header/Header"));

import "../../pages/home/home.css";
import { Box, Container } from "@mui/material";
import Profile from "../../components/header/ProfileIcon";
import Information from "./Information";
import ProfileDisplyComp from "./ProfileDisplyComp";
import ProfilePicker from "./ProfilePicker";
import SocialNetwork from "./SocialNetwork";
const ProfileComponent = () => {
	return (
		<>
			<Navbar />
			<Header />
			<Box sx={{overflow:'hidden'}} className="homeContainer">
				<Container  maxWidth="md">

					<Box sx={{maxWidth:1024, display: "flex",gap:'20px', justifyContent: "space-around", flexWrap: "wrap", alignContent: "flex-start",marginTop:6 }}>
						<Information />
						<Box
							sx={{
								display: "flex",
								flexWrap: "nowrap",
								flexDirection: "column",
								justifyContent: "flex-start",
								alignItems: "stretch",
                                gap:2
							}}
						>
							<ProfileDisplyComp />
							<SocialNetwork />
						</Box>
					</Box>
				</Container>
				{/* <Profile/> */}
				<Footer />
			</Box>
		</>
	);
};

export default ProfileComponent;
