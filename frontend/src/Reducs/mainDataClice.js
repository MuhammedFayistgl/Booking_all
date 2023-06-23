import { createSlice } from "@reduxjs/toolkit";
import { dataCollection } from "./extraSlice";

const initialState = {
  allHotals: {}
};

const HotelSlice = createSlice({
  name: "HotelApis",
  initialState,
  reducers: {
  },
  extraReducers: {
    [dataCollection.pending]: (state, action) => { state.loading = true },
    [dataCollection.rejected]: (state, action) => { state.loading = false },
    [dataCollection.fulfilled]: (state, action) => { state.allHotals.data = action.payload ,console.log("action.payload".action);},
  }
});
export const { HotelApiDataSeter } = HotelSlice.actions
export default HotelSlice.reducer