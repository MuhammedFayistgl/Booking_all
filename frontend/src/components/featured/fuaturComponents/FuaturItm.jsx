import React from "react";
import "../Featured.scss";
const Featuritm = ({itm}) => {
	return (
		<>
			<div className="featured">
				<div className="featuredItem">
					<img
						src={itm.url}
						alt=""
						className="featuredImg"
					/>
					<div className="featuredTitles">
						<h1>{itm.name}</h1>
						<h2>{itm.value}</h2>
					</div>
				</div>
			</div>
		</>
	);
};

export default Featuritm;
