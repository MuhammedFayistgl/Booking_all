import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { useNavigate } from "react-router-dom";
import "./propertyList.css";
import { useSelector } from "react-redux";
import Villas from "./Villas/Villas";
import Resorts from "./Resorts/Resorts";
import Apartments from "./Apartments/Apartments";
import Hotels from "./Hotels/Hotels";
import Cabins from "./Cabins/Cabins";


const PropertyList = () => {
  const state = useSelector((state) => state.HotelSlice.allHotals.data)
  // const test = state.filter(state => state.category == "Hotels").length



 

  return (
    <div className="pList">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
        direction="horizontal"
      >
        <SwiperSlide> <Hotels />  </SwiperSlide>
        <SwiperSlide> <Apartments /></SwiperSlide>
        <SwiperSlide> <Resorts /></SwiperSlide>
        <SwiperSlide> <Cabins /></SwiperSlide>
        <SwiperSlide> <Villas /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PropertyList;
