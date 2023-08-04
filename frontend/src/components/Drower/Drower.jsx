import React, { useEffect } from "react";
import "./Drower.css";
import { useDispatch, useSelector } from "react-redux";
import { Drawer, ButtonToolbar, Button, Placeholder } from "rsuite";
import { Box, Paper, Typography } from "@mui/material";
import { Progress } from "rsuite";
import { DrowerSetOpen } from "../../Reducs/userBockingSlice";

import { getPropertyHelper } from "../../utils/BookingHelper";
import Oneitm from "./item/Oneitm";
import {
	MDBBtn,
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBCol,
	MDBContainer,
	MDBIcon,
	MDBInput,
	MDBRow,
	MDBTypography,
} from "mdb-react-ui-kit";
import { getmyBooking } from "../../Reducs/extraSlice";

const Drower = () => {
	const dispath = useDispatch();

	/**state */
	const state = useSelector((state) => state.userBocking?.DrowerOpen);
	const cancel = useSelector((state) => state.userBocking?.Order?.data);
	const data = getPropertyHelper(); // return booking data
	// console.log('dataaas===',data);
	useEffect(() => {
		dispath(getmyBooking());
	}, [state,cancel]);

	return (
		<div style={{ position: "relative", overflow: "hidden", width: "70%" }}>
			<Drawer open={state} onClose={() => dispath(DrowerSetOpen(false))}>
				<Drawer.Body>
					<Placeholder.Paragraph />
				</Drawer.Body>
			</Drawer>
			<Drawer open={state} onClose={() => dispath(DrowerSetOpen(false))}>
				<Drawer.Header>
					<Typography>Your Bocking is confirmed </Typography>
				</Drawer.Header>
				<>
					{/* <Placeholder.Paragraph />
          <Progress.Line percent={80} showInfo={false} /> */}
					<section className="h-100 h-custom" style={{ backgroundColor: "#fff" }}>
						<MDBContainer className="h-100 py-1">
							<MDBRow className="justify-content-center  h-100">
								<MDBCol>
									<MDBCard className="shopping-cart" style={{ borderRadius: "12px" }}>
										<MDBCardBody className="text-black" style={{ borderColor: "none" }}>
											<MDBRow>
												<MDBCol lg="12" className="px-1  py-1">
													<MDBTypography tag="h5" className="mb-3 pt-1 text-center fw-bold text-uppercase">
														Your products
													</MDBTypography>
													{data &&
														data?.map((itm) => {
															return <Oneitm  itm={itm} key={itm._id} />;
														})}
												</MDBCol>
											</MDBRow>
										</MDBCardBody>
									</MDBCard>
								</MDBCol>
							</MDBRow>
						</MDBContainer>
					</section>
				</>
			</Drawer>
		</div>
	);
};
export default Drower;
