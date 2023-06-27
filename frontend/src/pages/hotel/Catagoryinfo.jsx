import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Catagoryinfo = () => {
    const { _id } = useParams()
    const state = useSelector((state) => state.HotelSlice.allHotals.data)?.filter(state => { return state._id == _id })[0]
    return (
        <>
            <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">Stay in the heart of City</h1>
                <p className="hotelDesc">
                    {state?.discription}
                </p>
            </div>
        </>
    )
}

export default Catagoryinfo
