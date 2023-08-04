import React from "react";
import { useParams } from "react-router-dom";
import { Grid} from "@mui/material";
import { useSelector } from "react-redux";
import SkeletonCopnt from "../Skeleton/SkeletonCopnt";
import "./filterlist.scss";
import CardLayout from "./Card_Compnent/CardLayout";

const Filterlist = ({ style }) => {
	const Data = useSelector((state) => state.HotelSlice.allHotals.data);


	const { params } = useParams();

	return (
		<>
		 {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}
				{Data ? (
				Data?.filter((data) => {
					return data.category == params;
				}).map((itm, index) => {
					return (
					// <Grid item xs={6}>
						<CardLayout itm={itm} key={index} style={style} />
						// </Grid>
						);
				})
			) : (
				<SkeletonCopnt />
			)}
		{/* </Grid> */}
		
		</>
	);
};

export default Filterlist;
