import { configureStore } from '@reduxjs/toolkit'
import SearchSlice  from '../SearchSlice'
import register from '../registerClice'
import userBocking from '../userBockingSlice'
import HotelSlice from '../mainDataClice'
import DrowerSettings from '../DrowerSettings'
import loginSlice from '../LoginSlice'
import profileHandlerSlice from '../ProfileUplodeingSlice'
// Store configuration
export const Store = configureStore({
    reducer:{
        SearchSlice,
        register,
        userBocking,
        HotelSlice,
        DrowerSettings,
        loginSlice,
        profileHandlerSlice
    }
})