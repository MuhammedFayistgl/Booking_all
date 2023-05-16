import { configureStore } from '@reduxjs/toolkit'
import SearchSlice  from '../SearchSlice'
import registr from './../registerClice'
import userBocking from '../userBockingSlice'
import HotelSlice from '../mainDataClice'

export const Store = configureStore({
    reducer:{
        SearchSlice,
        registr,
        userBocking,
        HotelSlice,
    }
})