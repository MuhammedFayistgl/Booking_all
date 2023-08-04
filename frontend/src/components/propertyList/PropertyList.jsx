import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { useNavigate } from "react-router-dom";
import "./propertyList.scss";
import { useSelector } from "react-redux";
import Villas from "./Villas/Villas";
import Resorts from "./Resorts/Resorts";
import Apartments from "./Apartments/Apartments";
import Hotels from "./Hotels/Hotels";
import Cabins from "./Cabins/Cabins";
import { Container, Typography } from "@mui/material";


const PropertyList = () => {
  const state = useSelector((state) => state.HotelSlice.allHotals.data)
  // const test = state.filter(state => state.category == "Hotels").length



 

  return (
    <div className="pList">

      <Container>
      <span className="homeTitle" >
					Browse by property type
				</span>
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
        <SwiperSlide> <Hotels />  </SwiperSlide>
        <SwiperSlide> <Apartments /></SwiperSlide>
        <SwiperSlide> <Resorts /></SwiperSlide>
        <SwiperSlide> <Cabins /></SwiperSlide>
        <SwiperSlide> <Villas /></SwiperSlide>
      </Swiper>
      </Container>
      
    </div>
  );
};

export default PropertyList;
