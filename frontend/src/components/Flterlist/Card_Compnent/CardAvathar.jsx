import React from "react";
import { LazyLoadImage, trackWindowScroll } from "react-lazy-load-image-component";

const CardAvathar = ({ itm, style }) => {
	return (
		<>
			<LazyLoadImage key={itm._id} src={itm.profilImg} className={style ? "img-siz-dcrs" : "siImg"} alt={"image"} effect="blur" />
		</>
	);
};

export default trackWindowScroll(CardAvathar);
