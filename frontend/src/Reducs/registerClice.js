import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registeruser, otpverificationserver } from "./extraSlice";


import { toast } from "react-hot-toast";
// export const getOtp =  createAsyncThunk ('register/getOtp', async (data)=>{
// console.log('dddddddddddddddddddd',data);
//   const Otp = await axios.post('http://localhost:5000/user/signup')
//   return Otp
// })

// export const dataSubmitDB = createAsyncThunk('', async ()=>{
//   const responce = axios.post('http://localhost:5000/user/otpVerification')
//  return responce
// })

const state = {
  Profile: "",
  Input: true,
  otpStatus: false,
  Otp: "",
  otpHash: "",
  otpVerification: false,
  emailErr: false,
  nameErr: false,
  mobNoErr: false,
  passwordErr: false,
  loding: false,
};
const register = createSlice({
  name: "register",
  initialState: state,
  reducers: {
    setProfileHandler: (state, action) => {
      state.Profile = URL.createObjectURL(action.payload);
    },
    setInputEmailHandler: (state, action) => {
      state.emailErr = !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Object.entries(action.payload)[0][1]);

      state.Input = { ...state.Input, ...action.payload };
    },
    setInputUserNameHandler: (state, action) => {
      state.nameErr = Object.entries(action.payload)[0][1].split("").length < 3;
      state.Input = { ...state.Input, ...action.payload };
    },
    setInputMobilNoHandler: (state, action) => {
      state.mobNoErr = Object.entries(action.payload)[0][1].split("").length < 10;
      state.Input = { ...state.Input, ...action.payload };
    },
    setInputPasswordHandler: (state, action) => {
      state.passwordErr = Object.entries(action.payload)[0][1].split("").length < 6;
      state.Input = { ...state.Input, ...action.payload };
    },
    setInputOtpHandler: (state, action) => {
      state.Otp = action.payload;
    },
  },
  extraReducers: {
    /**@@@ return OTP */
    [registeruser.pending]: (state) => {
      (state.loding = true), console.log("pending");
      state.otpStatus = false;
    },
    [registeruser.fulfilled]: (state, action) => {
      state.loding = false;
      state.otpHash = action.payload.otp;
     
      if(action.payload.otpsent){
         state.otpStatus = true;

      }else{
          toast.error(action.payload.message)
      }
      console.log("fullfill action", action.payload);
    
    },
    [registeruser.failed]: (state) => {
      console.log("faild");
      state.loding = false;
      state.otpStatus = false;
    },
    /**@@@ SENT OTP & INPUT DATA */
    [otpverificationserver.pending]: (state) => {
      state.loding = true;
    },
    [otpverificationserver.failed]: (state) => {
      state.loding = false;
    },
    [otpverificationserver.fulfilled]: (state, action) => {
      state.loding = false;
      toast.success(action.payload.message);
      state.userID = action.payload.userID
      console.log('action.payload',action.payload)
    },
  },
});

export const {
  setProfileHandler,
  setInputEmailHandler,
  setInputUserNameHandler,
  setInputMobilNoHandler,
  setInputPasswordHandler,
  setInputOtpHandler,
  otpverification,
} = register.actions;
export default register.reducer;
