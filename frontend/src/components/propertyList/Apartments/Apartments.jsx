import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SwiperSlide } from 'swiper/react'

const Apartments = () => {
    const state = useSelector((state) => state.HotelSlice.allHotals.data)
    const navigate = useNavigate();
    return (
        <>
            <div data-aos="fade-up" className="pListItem" onClick={() => navigate(`/filterhotels/Appartments`)}>
                <img
                    data-aos="zoom-out"
                    src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
                    alt=""
                    className="pListImg"
                />
                <div data-aos="zoom-in" className="pListTitles">
                    <h1>Appartments</h1>
                    <h2>{`${state?.filter(state => state.category == "Appartments").length} Apartments`}</h2>
                </div>
            </div>
        </>
    )
}

export default Apartments
