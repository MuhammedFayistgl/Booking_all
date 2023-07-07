import { TextField } from "@mui/material";
import validator from "email-validator";
import React from "react";
import { setEmail } from "../../Reducs/userBockingSlice";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "rsuite";
import "./form.scss";
const EmailFilled = () => {
	const Dispath = useDispatch();
	const state = useSelector((state) => state.userBocking.bookDeatilse);

	return (
		<>
			<TextField
			sx={{color:'white'}}
				{...(!state?.Email?.isValid && { error: true })}
				id="outlined-error"
				label="Email address"
				name="Email"
				size="small"
				
				onChange={(e) => Dispath(setEmail({ Email: e.target.value, isValid: validator.validate(e.target.value) }))}
				value={state?.Email?.Email}
			/>
			
		</>
	);
};

export default EmailFilled;
