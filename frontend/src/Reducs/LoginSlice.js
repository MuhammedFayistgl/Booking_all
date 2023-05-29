import { createSlice } from "@reduxjs/toolkit";
import { loginWithUsername } from "./extraSlice";
const state = {
  loading: false,
  loginData: {}, // else {}
};

const loginSlice = createSlice({
  name: "Userlogin",
  initialState: state,
  reducers: {
    setloginUsername: (state, action) => {
      state.loginData.Username = action.payload;
    },
    setloginPassword: (state, action) => {
      state.loginData.Password = action.payload;
    },
  },
  extraReducers: {
    [loginWithUsername.pending]: (state, action) => {
      state.loading = true;
    },
    [loginWithUsername.rejected]: (state, action) => {
        
      state.loading = false;
    },
    [loginWithUsername.fulfilled]: (state, action) => {
      state.loading = false;
      console.log('action.paylod',action.payload);
    },
  },
});

export const { setloginUsername, setloginPassword } = loginSlice.actions;
export default loginSlice.reducer;
