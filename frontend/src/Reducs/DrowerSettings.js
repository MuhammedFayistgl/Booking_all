import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  DrowerOpen: false,
  BockingData : false
};

const DrowerSettings = createSlice({
  name: "Settings",
  initialState,
  reducers: {
    DrowerSetOpen: (state, action) => {
      state.DrowerOpen = action.payload;
    },
    FormSummited: (state, action) => {
        state.BockingData = action.payload;
        
    },
  },
});
export const { DrowerSetOpen ,FormSummited } = DrowerSettings.actions;
export default DrowerSettings.reducer;
