import { createSlice } from '@reduxjs/toolkit'
import { BockingHandler, getmyBooking } from './extraSlice'
import { toast } from 'react-hot-toast'
import swal from 'sweetalert';

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
        setEmail: (state, action) => { state.bookDeatilse.Email = action.payload, console.log(action) },
        DrowerSetOpen: (state, action) => {
            state.DrowerOpen = action.payload;
        },

    },
    extraReducers: {
        [BockingHandler.fulfilled]: (state, action) => {
            state.Order = action.payload
            if (action.payload.orderstatus) {
                swal("Confirmed!", action.payload.message, "success");
            }
            else if (!action.payload.orderstatus) {
                swal("Sorry ", action.payload.message, 'error');
            }

            console.log('action.payload', action.payload);

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
            console.log(action.payload);
        },
    }

})
export const { setUseername, setPhonnumber, setEmail, DrowerSetOpen } = userbocking.actions
export default userbocking.reducer