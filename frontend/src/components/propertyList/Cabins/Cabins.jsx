import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SwiperSlide } from 'swiper/react'

const Cabins = () => {
    const state = useSelector((state) => state.HotelSlice.allHotals.data)
    const navigate = useNavigate();
    return (

        <SwiperSlide>
            <div data-aos="fade-up" className="pListItem" onClick={() => navigate(`/filterhotels/Cabins`)}>
                <img
                    data-aos="zoom-out"
                    src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
                    alt=""
                    className="pListImg"
                />
                <div data-aos="zoom-in" className="pListTitles">
                    <h1>Cabins</h1>
                    <h2>{`${state?.filter(state => state.category == "Cabins").length} Cabins`}</h2>
                </div>
            </div>
        </SwiperSlide>

    )
}

export default Cabins
