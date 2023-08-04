import React, { lazy } from "react";
import { Box, Grid, ToggleButton, ToggleButtonGroup,Container } from "@mui/material";
import "./hotellist.scss";
import ToggleGrpBTN from "./ToggleGrpBTN";

const Filterlist = lazy(() => import("../../components/Flterlist/Filterlist.jsx"));
const Footer = lazy(() => import("../../components/footer/Footer.jsx"));
const Navbar = lazy(() => import("../../components/navbar/Navbar.jsx"));
const Searchbox = lazy(() => import("../../components/Searchbox/Searchbox.jsx"));

const HotelList = () => {
	return (
		<div>
			<Navbar />
			<Container>
				<Box className=" hotellist-container ">
				<Box className=" hotellist-headng">
					<h1>Find the perfect hotel </h1>
					<p>From cheap hotels to luxury rooms and everything in between</p>
					<Searchbox type={"hotallist"} />

					{/* HRADER    */}
				</Box>
			</Box>
			<div className="heder ">
				<div className="hedercontent">
					<div className="left">
						<h3>Last minute hotels near you</h3>
						<p>Find a great deal on a hotel for tonight or an upcoming trip</p>
					</div>
					<div className="right">
						<ToggleGrpBTN />
					</div>
				</div>
			</div>
			<div className="filterd-wraper">
				<>
					{/* image List */}
					<Filterlist style={"img-siz-dcrs"} />
				</>
			</div>
			<div className="button-see-more">
				<ToggleGrpBTN />
			</div>
			<div className="filterd-wraper">
				<div className="filterd-items-wraper">
					<Footer />
				</div>
			</div>
			</Container>
			
		</div>
	);
};

export default HotelList;
// disabled
