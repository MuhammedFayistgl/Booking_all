import React, { useState } from "react";

import "./form.scss";
import { Box, FormControl, FormControlLabel, FormLabel, RadioGroup, TextField, Typography } from '@mui/material';
import LoadingButton from "@mui/lab/LoadingButton";

import TouchAppRoundedIcon from "@mui/icons-material/TouchAppRounded";
import { emailconfomationHandler } from "../../Helper/validation/UserHelper";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FormSummitStatus } from "../../Reducs/SearchSlice";
import Formcomponent from './Formcomponent'
import { BockingHandler } from "../../Reducs/extraSlice";

import Alert from "./Alert";

const Formcontainer = () => {
  const { _id } = useParams()
  const state = useSelector((state) => state.HotelSlice.allHotals.data)?.filter(state => { return state._id == _id })[0]
  /** reducx state */


  /** dispach  */
  const dispach = useDispatch();
  //!! USE State Hoocks



  /** ERROR STATE  for email validation and verification */

  const [conferm, setconferm] = useState(false);

  /** SUBMIT all text feald combine one State Object calld [form] */
  const SubmitHandler = (e) => {
    // toast.loading('please wait...')
    

    /** FORM DATA CHECKING  */
  
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
