import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const AmountInfo = () => {
    const { _id } = useParams()
    const state = useSelector((state) => state.HotelSlice.allHotals.data)?.filter(state => { return state._id == _id })[0]
    return (
        <>
            <h1>Perfect for a 9-night stay!</h1>
            <span>Located in the real heart of Krakow, this property has an excellent location score of 9.8!</span>
            <h2>
                <b>{state?.amount}</b> (9 nights)
            </h2>
        </>
    )
}

export default AmountInfo
