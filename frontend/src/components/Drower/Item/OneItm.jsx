import React from "react";
import "../Drower.css";
import { MDBCardImage, MDBIcon, MDBTypography } from "mdb-react-ui-kit";
import Paper from "@mui/material/Paper";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Itemimage from "./Itemimage";
const OneItm = ({ itm }) => {
	return (
		<Paper elevation={1}>
			<div className="d-flex p-2 mb-3">
				{/* Avathar */}
				<Itemimage src={itm.profilImg} />

				<div className="flex-grow-1 ms-3">
					<MDBTypography tag="h5" className="text-primary">
						{itm.name}
					</MDBTypography>
					<MDBTypography tag="h6" style={{ color: "#9e9e9e" }}>
						{itm.place}
					</MDBTypography>

					<div className="d-flex align-items-center">
						<p className="fw-small mb-0 me-5 pe-3" style={{ color: "green" }}>
							Confirmed
						</p>
					</div>
				</div>
				<MoreVertIcon sx={{ fontSize: 18 }} />
			</div>
		</Paper>
	);
};

export default OneItm;
