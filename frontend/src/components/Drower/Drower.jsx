import React from "react";
import "./Drower.css";
import { useDispatch, useSelector } from "react-redux";
import { Drawer, ButtonToolbar, Button, Placeholder } from "rsuite";
import { Box, Paper, Typography } from "@mui/material";
import { Progress } from "rsuite";
import { DrowerSetOpen } from "../../Reducs/userBockingSlice";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
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

const Drower = () => {
	/**state */
	const state = useSelector((state) => state.userBocking?.DrowerOpen);
	const orderdID = useSelector((state) => state.userBocking?.myBookDeatilse?.data?.orderdID);
	const data = getPropertyHelper(orderdID); // return booking data

	const dispath = useDispatch();

	return (
		<div style={{ position: "relative", overflow: "hidden" }}>
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
														data.map((itm) => {
															return <Oneitm itm={itm} key={itm._id} />;
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
