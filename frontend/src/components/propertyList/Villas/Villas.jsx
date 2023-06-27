import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SwiperSlide } from 'swiper/react'

const Villas = () => {
    const state = useSelector((state) => state.HotelSlice.allHotals.data)
    const navigate = useNavigate();
    return (
        <>
        <div data-aos="fade-up" className="pListItem" onClick={() => navigate(`/filterhotels/Villas`)}>
            <img
                data-aos="zoom-out"
                src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
                alt=""
                className="pListImg"
            />
            <div data-aos="zoom-in" className="pListTitles">
                <h1>Villas</h1>
                {/* <h2>{`${state?.filter(state => state.category == "Villas").length} Villas`}</h2> */}
            </div>
        </div>
    </> 
    )
}

export default Villas
