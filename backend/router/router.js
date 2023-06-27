import express from "express";
import {
  registerUser,
  getUser,
  getOneUser,
  updateUser,
  deleteUser,
  signup,
  otpSend,
  userdetealsVerification,
  crateNewOTP,
} from "../controller/userController.js";


import { bockingHandler } from "../controller/Bockinguser.js";
import {  registergenrteOtpHandler ,otpverifyingHandler,loginHandler } from "../controller/userHelper.js";
import { authentcationMiddlwer } from "../middlewere/authmiddlwer.js";
const router = express.Router();

// router.post("/", registerUser);
// router.get("/getUser", protect, getUser);
// router.get("/oneUser", getOneUser);
// router.post("/userupdate", updateUser);
// router.delete("/delete/:id", deleteUser);
// router.post("/sendOtp", otpSend);
// router.post("/otpVerification", signup);
// router.post("/userdetealsVerification", userdetealsVerification);
// router.post("/signup", crateNewOTP);
router.post("/bocking",authentcationMiddlwer,  bockingHandler);
router.post("/getotp", registergenrteOtpHandler);
router.post("/otpverifying",  otpverifyingHandler);
router.post ('/userlogin',loginHandler)
router.post ('/Loginverify', authentcationMiddlwer);
export default router;
