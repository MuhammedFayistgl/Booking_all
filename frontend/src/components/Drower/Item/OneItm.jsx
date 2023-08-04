import React from "react";
import "../Drower.css";
import { MDBCardImage, MDBIcon, MDBTypography } from "mdb-react-ui-kit";
import Paper from "@mui/material/Paper";

import Itemimage from "./Itemimage";
import DropdownOrder from "./Dropdown/DropdownOrder";
const OneItm = ({ itm }) => {

	return (
		<Paper elevation={1}>
			
			<div className="d-flex p-2 mb-3">
			
				{/* Avathar */}
				<Itemimage src={itm.profilImg} />

				<div className="flex-grow-1 ms-3">
					<MDBTypography tag="h6" className="text-primary" style={{ fontSize:10,lineHeight:0 }}>
						{itm.name}
					</MDBTypography>
					<MDBTypography tag="h6" style={{ color: "#9e9e9e" ,fontSize:10 }}>
						{itm.place}
					</MDBTypography>

					<div className="d-flex align-items-center">
						<p className=" mb-0 me-5 pe-3" >
							<DropdownOrder id={itm._id}/>	
						</p>
					</div>
					
				</div>
				{/* <MoreVertIcon sx={{ fontSize: 18 }}/> */}
			
			
			</div>
		</Paper>
	);
};

export default OneItm;
