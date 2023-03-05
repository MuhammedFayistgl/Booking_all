import { configureStore } from '@reduxjs/toolkit'
import SearchSlice  from '../SearchSlice'
import registr from './../registerClice'

export const Store = configureStore({
    reducer:{
        SearchSlice,
        registr
    }
})