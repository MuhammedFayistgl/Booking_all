import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { lazy } from "react";
const CnfmBTN = lazy(() => import("./CnfmBTN"));
const Information = () => {
    const { _id } = useParams()
    const state = useSelector((state) => state.HotelSlice.allHotals.data)?.filter(state => { return state._id == _id })[0]
    return (
        <>
        <div className='hotelTitleContainer'>
             <h1 className="hotelTitle">{state?.name}</h1>
             <CnfmBTN bookNow={"bookNow"} />
        </div>
           
            <div className="hotelAddress">
                {/* <FontAwesomeIcon icon={faLocationDot} /> */}
                <i className="fa-solid fa-location-dot"></i>
                <span>{state?.place}</span>
            </div>
            <span className="hotelDistance">Excellent location – 500m from center</span>
            <span className="hotelPriceHighlight">Book a stay over $114 at this property and get a free airport taxi</span>
        </>
    )
}

export default Information
