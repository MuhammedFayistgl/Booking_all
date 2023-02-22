import { configureStore } from '@reduxjs/toolkit'
import SearchSlice  from '../SearchSlice'

export const Store = configureStore({
    reducer:{
        SearchSlice
    }
})