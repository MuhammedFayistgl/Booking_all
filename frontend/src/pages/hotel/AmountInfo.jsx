import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const AmountInfo = () => {
	const { _id } = useParams();
	const state = useSelector((state) => state.HotelSlice.allHotals.data)?.filter((state) => {
		return state._id == _id;
	})[0];
	return (
		<>
			<Box sx={{ minWidth: 275 }}>
				<Card variant="outlined">
					<React.Fragment>
						<CardContent>
							<Typography sx={{ fontSize: 17 }} color="text.secondary" gutterBottom>
								Perfect for a 9-night stay!
							</Typography>
							<Typography variant="body2">
								Located in the real heart of Krakow, this property has an excellent location score of 9.8!
							</Typography>
							<Typography sx={{ mb: 1.5 }} color="text.secondary">
								<br />
								<b sx={{ fontSize: 17 }}>{state?.amount}</b> (9 nights)
							</Typography>
						</CardContent>
					</React.Fragment>
				</Card>
			</Box>
		</>
	);
};

export default AmountInfo;
