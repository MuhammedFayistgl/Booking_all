import { createSlice } from '@reduxjs/toolkit'
import { BockingHandler, cancelOrder, getmyBooking, setProfileimageFileAsync } from './extraSlice'
import { toast } from 'react-hot-toast'
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const initialState = {

}


const profileHandlerSlice = createSlice({
    name: 'profileHandlerSlice',
    initialState,
    reducers: {

    },
    extraReducers: {

         [setProfileimageFileAsync.fulfilled]: (state, action) => { 
            console.log(action.payload);
         },
    }

})
export const {  } = profileHandlerSlice.actions
export default profileHandlerSlice.reducer