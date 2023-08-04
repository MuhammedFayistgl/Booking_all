import { createSlice } from '@reduxjs/toolkit'
import { BockingHandler, cancelOrder, getmyBooking } from './extraSlice'
import { toast } from 'react-hot-toast'
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const initialState = {
    bookDeatilse: {
    },
    myBookDeatilse: {},

}


const userbocking = createSlice({
    name: 'userbocking',
    initialState,
    reducers: {
        setUseername: (state, action) => { state.bookDeatilse.FullName = action.payload },
        setPhonnumber: (state, action) => {
            state.bookDeatilse.Phone = action.payload
            // console.log({...state.bookDeatilse.Phone, ...action.payload});
        },
        setEmail: (state, action) => { state.bookDeatilse.Email = action.payload },
        DrowerSetOpen: (state, action) => {
            state.DrowerOpen = action.payload;
        },

    },
    extraReducers: {
        [BockingHandler.fulfilled]: (state, action) => {
            state.Order = action.payload
            if (action.payload?.orderstatus) {
               new Swal("Confirmed!", action.payload?.message, "success");
            }
            else if (!action.payload?.orderstatus) {
              new  Swal("Sorry ", action.payload?.message, 'error');
            }

        

        },
        [BockingHandler.pending]: (state, action) => {

        },
        [BockingHandler.rejected]: (state, action) => {

        },
        //    getmyBooking
        [getmyBooking.pending]: (state, action) => {},
        [getmyBooking.rejected]: (state, action) => {},
        [getmyBooking.fulfilled]: (state, action) => {
            state.myBookDeatilse = action.payload
            // toast.success(action.payload?.message)
        },
        //cancelOrder
        [cancelOrder.fulfilled]: (state, action) => {
            state.deletedOrder = action.payload?.data
             console.log(action.payload?.message);
             console.log(action.payload?.data);
        }  ,
    }

})
export const { setUseername, setPhonnumber, setEmail, DrowerSetOpen } = userbocking.actions
export default userbocking.reducer