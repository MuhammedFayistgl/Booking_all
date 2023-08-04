import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Button from "react-bootstrap/Button";
import Card from "../../components/Card/Card";

import "./confomation.scss";

import { Container, Step, StepLabel, Stepper } from "@mui/material";
import Searchbox from "../../components/Searchbox/Searchbox";
import { useSelector } from "react-redux";
import BockingDeatials from "../../components/Bocking Deatials/BockingDeatials";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Activstep from "../../components/ActiveStep/Activstep";
import Pricedetails from "./pricedetails";
import ConfomLayout from "./ConfomLayout";
// import { useLocation } from "react-router-dom";

const Confomation = () => {
	return (
		<div>
			<Navbar />

			<Container >
				{/* Active Step Component */}
				<Activstep />
				<div style={{ display: "flex", justifyContent: "center" }}>
					 {/* Disable Search button Props */}
				<Searchbox butonDesable={true} confm={true} />
				</div>
				
				<ConfomLayout />
			
			</Container>
		</div>
	);
};

export default Confomation;
