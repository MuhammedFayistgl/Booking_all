import React, { useState } from "react";

import "./form.scss";
import { Box, FormControl, FormControlLabel, FormLabel, RadioGroup, TextField, Typography } from '@mui/material';
import LoadingButton from "@mui/lab/LoadingButton";

import TouchAppRoundedIcon from "@mui/icons-material/TouchAppRounded";
import { emailconfomationHandler } from "../../Helper/validation/UserHelper";
import toast, { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FormSummitStatus } from "../../Reducs/SearchSlice";
import Formcomponent from './Formcomponent'
import { BockingHandler } from "../../Reducs/extraSlice";

import Alert from "./Alert";

const Formcontainer = () => {
  const { state } = useLocation();
  /** reducx state */
  const Rdxstate = useSelector((state) => state.SearchSlice);

  /** dispach  */
  const dispach = useDispatch();
  //!! USE State Hoocks
  const [formData, setformData] = useState({
    Date: new Date().toLocaleDateString(),
    Time: new Date().toLocaleTimeString(),
    travellingforwork: "yse",
    orderdID: state?._id,
  });



  /** ERROR STATE  for email validation and verification */

  const [conferm, setconferm] = useState(false);

  /** SUBMIT all text feald combine one State Object calld [form] */
  const SubmitHandler = (e) => {
    // toast.loading('please wait...')
    

    /** FORM DATA CHECKING  */
    if (!formData?.Email || !formData?.FullName || !formData?.travellingforwork) {
      toast.error("please fill all fields");
    } else if (Rdxstate?.date[0]?.endDate === "Check-out") {
      toast.error("please select your check out date");
    } else {
      toast.success(`your boocking Succussfully`);
      dispach(FormSummitStatus(2));
      dispach(BockingHandler({ ...formData, ...Rdxstate }));
    }
  };
  /** Email validation */
  const emailValidation = (macheml, e) => {

    const em = e.target.value;
    console.log("em ", em);
    console.log("macheml ", macheml);
    if (em === macheml) {
      setconferm(false);
    } else {
      setconferm(true);
    }
  };

  return (
    <div>
      <Toaster />
      <div className="box-container fdc">
        Enter your details
        <Alert />
        <div className="form-check df fdr">
        <Formcomponent/>
       
        </div>
      </div>
    </div>
  );
};

export default Formcontainer;
