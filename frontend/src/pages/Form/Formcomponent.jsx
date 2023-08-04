import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PhoneNvalidation from "./PhoneNvalidation";
import NameFilled from "./NameFilled";
import EmailFilled from "./EmailFilled";
import SummitBTN from "./SummitBTN";
import { Box, Grid } from "@mui/material";
import { FormSummitStatus } from "../../Reducs/SearchSlice";
import { BockingHandler } from "../../Reducs/extraSlice";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

const Formcomponent = () => {
	const Dispath = useDispatch();
	const { _id } = useParams();
	const Userinfo = useSelector((state) => state.userBocking);
	const Rdxstate = useSelector((state) => state.SearchSlice);
	console.log("Rdxstate", Userinfo);
	console.log("eml",);

	const SubmitHandler = (e) => {
		e.preventDefault()
	
		const BookingData = {
			Date: new Date().toLocaleDateString(),
			Time: new Date().toLocaleTimeString(),
			orderdID: _id,
			endDate: Rdxstate?.date[0].endDate,
			startDate: Rdxstate?.date[0].startDate,
			options: Rdxstate?.options,
			Email: Userinfo?.bookDeatilse?.Email?.Email,
			FullName: Userinfo?.bookDeatilse?.FullName,
			Phone: Userinfo?.bookDeatilse?.Phone?.phoneNumber,
		};
		if (!BookingData.orderdID) {
			toast.error("Your Order Id missing !");
		} else if (BookingData.endDate === "Check-out") {
			toast.error("Please Select CheckOut Date...");
		} else if (!BookingData.startDate === "Check-in") {
			toast.error("Please Confrm Bookiing Date...");
		} else if (BookingData.options.adult < 1) {
			toast.error("Booking only adult !");
		} else if (BookingData.options.room < 1) {
			toast.error("Please select yout rooms...");
		} else if (!BookingData.Email) {
			toast.error("Please Ender valid Email Address !");
		} else if (!BookingData.FullName) {
			toast.error("Please Ender Your FullName ");
		} else if (!BookingData.Phone) {
			toast.error("Please Ender Your valid phoneNumber");
		} else {
			Dispath(FormSummitStatus(2));
			Dispath(BockingHandler(BookingData));
		}
	};

	return (
		<>
			<>
				<Box component="form" onSubmit={(e) => { SubmitHandler(e)}}>
					<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
						<Grid item xs={6}>
							<NameFilled />
						</Grid>
						<Grid item xs={6}>
							<EmailFilled />
						</Grid>
						<Grid item xs={6}>
							<PhoneNvalidation />
						</Grid>
						<Grid item xs={6}>
							<SummitBTN />
						</Grid>
					</Grid>
				</Box>
			</>
		</>
	);
};

export default Formcomponent;
