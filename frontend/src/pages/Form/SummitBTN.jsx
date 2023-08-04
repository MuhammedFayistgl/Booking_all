import React, { useState } from "react";
import TooltipComponent from "./Tooltip/TooltipComponent";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import PanToolAltRoundedIcon from "@mui/icons-material/PanToolAltRounded";
import { useDispatch, useSelector } from "react-redux";
import Tooltip from "@mui/material/Tooltip";

const SummitBTN = () => {
	const Dispath = useDispatch();
	const state = useSelector((state) => state.userBocking.bookDeatilse);

	const vfyEmail = state?.Email?.isValid;
	const vfyName = state?.FullName;
	const vfyPhone = state?.Phone?.isValid;
	console.log(vfyEmail,vfyName,vfyPhone);
	return (
		<>
			<Tooltip title={<TooltipComponent />}>
				<LoadingButton
					loading={false}
					disabled={!(vfyEmail && vfyName && vfyPhone)}
					loadingPosition="start"
					type="submit"
					startIcon={<PanToolAltRoundedIcon color="success" />}
					variant="outlined"
				>
					Submit
				</LoadingButton>
			</Tooltip>
		</>
	);
};

export default SummitBTN;
