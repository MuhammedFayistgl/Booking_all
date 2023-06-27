import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SwiperSlide } from 'swiper/react'

const Hotels = () => {
    const state = useSelector((state) => state.HotelSlice.allHotals.data)
    const navigate = useNavigate();
    return (
        <>
            <div data-aos="fade-up" className="pListItem" onClick={() => navigate(`/filterhotels/Hotels`)}>
                <img
                    data-aos="zoom-out"
                    src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
                    alt=""
                    className="pListImg"
                />
                <div data-aos="zoom-in" className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>{`${state?.filter(state => state.category == "Hotels").length} hotels`}</h2>
                </div>
            </div>
        </>
    )
}

export default Hotels
