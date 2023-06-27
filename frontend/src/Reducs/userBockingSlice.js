import { createSlice } from '@reduxjs/toolkit'
import { BockingHandler } from './extraSlice'
import { toast } from 'react-hot-toast'

const initialState = {
    userID: 'ertuiyoi489750y',
    bookDeatilse: {
    }

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
        setBoocking: (state, action) => { },
    },
    extraReducers: {
        [BockingHandler.fulfilled]: (state, action) => {
            state.Order = action.payload
            toast.success(action.payload.data?.message)
           // console.log('action.payload',action.payload);

        },
        [BockingHandler.pending]: (state, action) => {

        },
        [BockingHandler.rejected]: (state, action) => {

        },
    }

})
export const { setUseername, setPhonnumber, setEmail, setBoocking, } = userbocking.actions
export default userbocking.reducer