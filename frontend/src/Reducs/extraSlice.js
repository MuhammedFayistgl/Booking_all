import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { toast } from "react-hot-toast";
/** Registration with email */
export const registeruser = createAsyncThunk(
  "registeruser",

  async (smtData) => {
    let { Email } = smtData;

    const responce = await axios.post("http://localhost:5000/user/getotp", { Email });

    if (responce.status === 201) {
      toast.success(responce.data.message);
    } else if (responce.status === 208) {
      toast.error(responce.data.message);
    }
    return responce.data;
  }
);
/** return Otp & create user */
export const otpverificationserver = createAsyncThunk(
  "otpverificationserver",

  async (data) => {
    let { otpHash, Otp } = data;
    let input = data.Input;
    const responce = await axios.post("http://localhost:5000/user/otpverifying", { otpHash, Otp, ...input });
    return responce.data;
  }
);
/** Login user with username password */
export const loginWithEmail = createAsyncThunk("loginWithEmail",
  async (data) => {
    const res = axios.post("http://localhost:5000/user/userlogin", data)
      .then((res) => { return res.data })
    return res

  });

// Check if login or  . Middleware 
// export const loginMiddleware = createAsyncThunk("loginMiddleware",

// )

// get all data from database
export const dataCollection = createAsyncThunk(
  'getalldatafromdatabase',
  async () => {
    const res = await
      axios
        .get("http://localhost:5000/admin/getallDeteals")
        .then((response) => response.data.data)
    return res
  }
)
// Booking 
export const BockingHandler = createAsyncThunk(
  'Bocking',
  async (Booking_Data) => {
    const res = await axios.post('http://localhost:5000/user/bocking', { Booking_Data }).then((response) => {
      return response.data
    }).catch((err) => toast.error(err));
    return res
  })
export const getmyBooking = createAsyncThunk("getmyBooking",
  async () => {
    const res = await axios.get('http://localhost:5000/user/getmyBooking')
      .then((response) => { return response.data }).catch((err) => console.log(err));
    return res
  }
)

export const cancelOrder = createAsyncThunk('cancelOrder',
  async (id) => {
    const data = await axios.post('http://localhost:5000/user/cancelOrder', { orderID: id })
      .then(response => { return response.data })
      .catch(err => toast.error(err))
    return data
  }
)
export const loginVerification = createAsyncThunk('loginVerification',
  async () => {
    const data = await axios.post('http://localhost:5000/user/getuser')
      .then((res) => { return res.data }).catch(err => { return err.response.data })
    return data
  }
)
export const setProfileimageFileAsync = createAsyncThunk('setProfileimageFileAsync',
  async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    console.log(formData.get('file'));
    const data = await axios.post("http://localhost:5000/user/uplodprofileimg", formData, config)
      .then((res) => { return res.data }).catch(err => { return err.response.data })
    return data
  }
)

