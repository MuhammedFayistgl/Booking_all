import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SwiperSlide } from 'swiper/react'

const Resorts = () => {
    const state = useSelector((state) => state.HotelSlice.allHotals.data)
    const navigate = useNavigate();
    return (
        <>
            <div data-aos="fade-up" className="pListItem" onClick={() => navigate(`/filterhotels/Resorts`)}>
                <img
                    data-aos="zoom-out"
                    src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
                    alt=""
                    className="pListImg"
                />
                <div data-aos="zoom-in" className="pListTitles">
                    <h1>Resorts</h1>
                    <h2>{`${state?.filter(state => state.category == "Resorts").length} Resorts`}</h2>
                </div>
            </div>
        </>
    )
}

export default Resorts
