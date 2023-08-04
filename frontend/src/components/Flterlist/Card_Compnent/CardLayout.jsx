import React from "react";
import Cardrating from "./Cardrating";
import CardAvathar from "./CardAvathar";
import { useNavigate } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import '../filterlist.scss'
const CardLayout = ({ itm, style }) => {
	const navigate = useNavigate();
	return (
		<>
			<div className="searchItem">
				<CardAvathar itm={itm} style={style} />

				<div
					className="siDesc"
					onClick={() => {
						navigate(`/hotel/${itm._id}`, { state: itm });
					}}
				>
					<h1 className={style ? "NameFountsiz" : "siTitle"}>{itm.name}</h1>
					<h6>{itm.place} </h6>
				</div>
				<div className="siDetails">
					<div className="siRating">
						<Cardrating itm={itm} />
						<Typography>{`${itm.rating}.9`}</Typography>
					</div>
					<div className="siDetailTexts">
						<span className="siPrice">{itm.amount}</span>
						<span className="siTaxOp">Includes taxes and fees</span>
						<button className={style ? "siCheckButton-foint-siz" : "siCheckButton"}>See availability</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default CardLayout;
