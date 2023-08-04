import "./featuredProperties.scss";
import { FeaturedPropertiesData } from "../../assets/DATA/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useSelector } from "react-redux";
import { Container, Typography } from "@mui/material";

const FeaturedProperties = () => {
	return (
		<>
			<Typography variant="h5" component="h5" className="homeTitle">
				Homes guests love
			</Typography>
			<div data-aos="fade-down" className="fp">
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
							slidesPerView: 3,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 50,
						},
						2000: {
							slidesPerView: 5,
							spaceBetween: 50,
						},
					}}
					modules={[Pagination]}
					className="mySwiper"
				>
					{FeaturedPropertiesData &&
						FeaturedPropertiesData.map((itm) => {
							return (
								<SwiperSlide>
									<div data-aos="zoom-in" className="fpItem">
										<img src={itm.url} alt="" className="fpImg" />
										<span className="mycontnt">
											<span className="mycontentright">
												<span data-aos="fade-right" className="fpName">
													{itm.name}
												</span>
												<span data-aos="fade-left" className="fpCity">
													{itm.place}
												</span>
                        <span data-aos="fade-right" className="fpPrice">
												{itm.price}
											</span>
											</span>
										
											<div className="fpRating">
												<button>{itm.ratring}</button>
												<span>{itm.status}</span>
											</div>
										</span>
									</div>
								</SwiperSlide>
							);
						})}
				</Swiper>
			</div>
		</>
	);
};

export default FeaturedProperties;
<Container>
	<span className="homeTitle">Browse by property type</span>
</Container>;
