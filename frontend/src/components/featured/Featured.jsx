import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useSelector } from "react-redux";
import { Container } from "@mui/material";
import Featuritm from "./fuaturComponents/fuaturitm";
import { feautureData } from "../../assets/DATA/data";

const Featured = () => {
	// const state = useSelector((state) => state.HotelSlice.allHotals.data)
	// const test = state.filter(state => state.category == "Hotels").length

	return (
		<div className="pList">
			<Container>
				<span className="homeTitle">Browse by property type</span>
				<Swiper
					slidesPerView={3}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					breakpoints={{
						300: {
							slidesPerView: 1,
							spaceBetween: 15,
						},
						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 4,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 5,
							spaceBetween: 50,
						},
					}}
					modules={[Pagination]}
					className="mySwiper"
				>
					{feautureData &&
						feautureData.map((itm) => {
							return (
								<SwiperSlide>
									<Featuritm itm={itm} />
								</SwiperSlide>
							);
						})}
				</Swiper>
			</Container>
		</div>
	);
};

export default Featured;
