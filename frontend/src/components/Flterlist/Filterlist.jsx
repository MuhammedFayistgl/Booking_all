import React from "react";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import SkeletonCopnt from "../Skeleton/SkeletonCopnt";
import "./filterlist.scss";
import CardLayout from "./Card_Compnent/CardLayout";

const Filterlist = ({ style }) => {
	const Data = useSelector((state) => state.HotelSlice.allHotals.data);


	const { params } = useParams();

	return (
		<>
			{Data ? (
				Data?.filter((data) => {
					return data.category == params;
				}).map((itm, index) => {
					return <CardLayout itm={itm} key={index} style={style} />;
				})
			) : (
				<SkeletonCopnt />
			)}
		</>
	);
};

export default Filterlist;
