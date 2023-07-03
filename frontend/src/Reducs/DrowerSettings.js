import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  DrowerOpen: false,
  BockingData : false
};

const DrowerSettings = createSlice({
  name: "Settings",
  initialState,
  reducers: {
  
    FormSummited: (state, action) => {
        state.BockingData = action.payload;
        
    },
  },
});
export const {  FormSummited } = DrowerSettings.actions;
export default DrowerSettings.reducer;
