import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
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
  UserName: "",
  password: "",
  Email: "",
  Number: "",
  Otp:'',
  OtpStatusMsg:'',
  Otp_Status:false
};
const register = createSlice({
  name: "register",
  initialState: state,
  reducers: {
    registerUsers: (state, action) => {
     
     const { UserName ,  password, Email, Number} = action.payload
      state.UserName = UserName
      state.password = password
      state.Email = Email
      state.Number = Number
      
     axios.post('http://localhost:5000/user/sendOtp',{ Email})
    
      
    },
    sumitDetails: (state,action)=>{
    state={
      UserName:state.UserName,
      password:state.password,
      Email: state.Email,
      Number:state.Number,
      Otp:state.Otp,
     

    }
   
      state.Otp = action.payload.Otp

      axios.post('http://localhost:5000/user/userdetealsVerification',{state})
     console.log('state',state);
   }
  
  },
 
  
});

export const { registerUsers ,sumitDetails} = register.actions;
export default register.reducer;
