import { Button, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const BockingDeatials = () => {
	const State = useSelector((state) => state.SearchSlice);

	return (
		<>
			<div className="bocking-deatealse box-container">
				<h5>Your booking details</h5>


				<Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
				
						<Grid item xs={6}>
							
								<h5>{State?.date[0].startDate === "Check-in" ? new Date().toLocaleDateString() : State?.date[0].startDate}</h5>
								<span> {new Date().toLocaleTimeString()}</span>
							
							<hr />
						</Grid>
						<Grid item xs={6}>
							<h5>
								{State?.date[0].endDate === "Check-out" ? (
									<h5 style={{ color: "red" }}>Plese sellect<br/> Check-out date</h5>
								) : (
									State?.date[0].endDate
								)}
							</h5>
              	<span>00:00 – 00:00</span>
						</Grid>
				</Grid>


				<h6 style={{ margin: 0 }}>{`adult : ${State.options.adult}`}</h6>
				<h6 style={{ margin: 0 }}>{`children : ${State.options.children}`}</h6>
				<h6 style={{ margin: 0 }}>{`Rooms : ${State.options.room}`}</h6>
				<hr />
				<span>Total length of stay:</span>
				<h5>1 night</h5>
				<hr />
				<h5>You selected:</h5>
				<span>Standard Double Room with Fan</span>
        <Button sx={{m:2}} variant="contained">Change your selection</Button>


			</div>
		</>
	);
};

export default BockingDeatials;
