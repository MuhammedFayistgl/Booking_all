import { createSlice } from "@reduxjs/toolkit";
import { loginWithEmail } from "./extraSlice";
import { toast } from "react-hot-toast";
import { Navigate, redirect } from "react-router-dom";


const state = {
  loading: false,
  loginData: {},
  emailErr: false,
  login: false,
  cookie: false,
};

const loginSlice = createSlice({
  name: "Userlogin",
  initialState: state,
  reducers: {
    setloginUsername: (state, action) => {
      state.emailErr = !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Object.entries(action.payload)[0][1]);
      state.loginData = { ...state.loginData, ...action.payload };
    },
    setloginPassword: (state, action) => {
      state.loginData = { ...state.loginData, ...action.payload };
    },
    setCookies: (state, action) => {
      state.cookie = document.cookie
    }
  },
  extraReducers: {
    [loginWithEmail.pending]: (state, action) => {
      state.loading = true;

    },
    [loginWithEmail.rejected]: (state, action) => {
      console.log(action.payload.message);
      toast.error(action.payload.message)
      state.loading = false;
    },
    [loginWithEmail.fulfilled]: (state, action) => {
      state.userID = action.payload.userID
      toast.success(action.payload.message)
      state.loading = false;
      console.log('action.paylod', action.payload);
    },
  },
});

export const { setloginUsername, setloginPassword, setCookies } = loginSlice.actions;
export default loginSlice.reducer;
