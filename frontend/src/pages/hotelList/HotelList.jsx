import React, { lazy } from "react";
import { Box, Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";
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
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					{/* image List */}
					<Filterlist style={"img-siz-dcrs"} />
				</Grid>
			</div>
			<div className="button-see-more">
				<ToggleGrpBTN />
			</div>
			<div className="filterd-wraper">
				<div className="filterd-items-wraper">
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default HotelList;
// disabled
