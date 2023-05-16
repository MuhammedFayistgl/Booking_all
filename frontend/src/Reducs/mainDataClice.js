import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allHotals:{}
};

const HotelSlice = createSlice({
  name: "HotelApis",
  initialState,
  reducers: {
    HotelApiDataSeter: (state, action) => {
        state.allHotals = action.payload
    },
  },
});
export const {HotelApiDataSeter} = HotelSlice.actions
export default HotelSlice.reducer