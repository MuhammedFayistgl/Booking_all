import { Box, Container, Grid } from "@mui/material";
import React from "react";
import BockingDeatials from "../../components/Bocking Deatials/BockingDeatials";
import Pricedetails from "./pricedetails";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import Form from "../Form/Form";

const ConfomLayout = () => {
    const { _id } = useParams();
	const state = useSelector((state) => state.HotelSlice.allHotals.data)?.filter((state) => {
		return state._id == _id;
	})[0];
	return (
		<Container sx={{mt:"18%"}}>
			<Box sx={{ flexGrow: 1 }}>
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				<Grid  xs={12} sm={6} md={6}>
					<BockingDeatials />
				</Grid>
                <Grid  xs={12} sm={6} md={6}>
					<Card seavblbutton={false}></Card>
				</Grid>
				<Grid  xs={12} sm={6} md={6}>
					<Pricedetails state={state} />
				</Grid>
				
				<Grid  xs={12} sm={6} md={6}>
					<Form />
				</Grid>
			</Grid>
		</Box>	
		</Container>
	
	);
};

export default ConfomLayout;
