import React from "react";
import "./confomation.scss";
const Pricedetails = ({state}) => {
	return (
		<div className="price-details box-container  ">
			<div className="price-container  ">
				<h5>Price</h5>
				<span>₹{state?.amount}</span>
			</div>
			<span>(for 2 guests)</span>
			<div className="extra-  ">
				<h5>Excluded charges</h5>
				<div className="price-container">
					<span>Goods & services tax</span>
					<span>₹ {state?.amount / 100}</span>
				</div>
			</div>
		</div>
	);
};

export default Pricedetails;
