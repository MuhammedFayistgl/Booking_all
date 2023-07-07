import { Rating } from "@mui/material";
import React from "react";

const Cardrating = ({ itm }) => {
	return (
		<div className="star-rate">
			{itm.rating === 5 && <span style={{ color: "green" }}>Excellent</span>}
			{itm.rating === 4 && <span style={{ color: "green" }}>Excellent</span>}
			{itm.rating === 3 && <span style={{ color: "#ffc107" }}>good</span>}
			{itm.rating === 2 && <span style={{ color: "red" }}>Avarage</span>}
			{itm.rating === 1 && <span style={{ color: "red" }}>Avarage</span>}

			<div className="stars">
				<Rating name="read-only" value={itm.rating} readOnly />
			</div>
		</div>
	);
};

export default Cardrating;
