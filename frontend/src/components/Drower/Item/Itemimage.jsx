import React from "react";
// import "../Drower.css";
import { MDBCardImage } from "mdb-react-ui-kit";
const Itemimage = ({ src }) => {
	return (
		<>
			<div className="flex-shrink-0">
				<MDBCardImage src={`${src}`} fluid style={{ width: "50px" }} alt="Generic placeholder image" />
			</div>
		</>
	);
};
export default Itemimage;
