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
    console.log("res.data", responce);
    return responce.data;
  }
);
/** Login user with username password */
export const loginWithEmail = createAsyncThunk("loginWithEmail", async (data) => {
  console.log(data, 'data');
  let res = axios.post("http://localhost:5000/user/userlogin", data)
  return res

});

// get all data from database
export const dataCollection = createAsyncThunk(
  'getalldatafromdatabase',
  async () => {
    const res = await
      axios
        .get("http://localhost:5000/admin/getallDeteals")
        .then((response) => response.data.data)
    // .catch((err) => {
    //   console.log(err);
    // });
    console.log(res, 'response');
    return res
  }
)
// Booking 
export const BockingHandler = createAsyncThunk(
  'Bocking',
  async (BoplingData) => {
    const res = await axios.post('http://localhost:5000/user/bocking', { BoplingData }).then((response) => {
      return response
    })
    return res
  })