import React, { useState } from "react";

import "./form.scss";
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import PanToolAltRoundedIcon from "@mui/icons-material/PanToolAltRounded";
import TouchAppRoundedIcon from "@mui/icons-material/TouchAppRounded";
import { BockingHandler, emailconfomationHandler } from "../../Helper/validation/UserHelper";
import toast, { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FormSummitStatus } from "../../Reducs/SearchSlice";

const Formcontainer = () => {
  const { state } = useLocation();
  /** reducx state */
  const Rdxstate = useSelector((state) => state.SearchSlice);
/** dispach  */
const dispach = useDispatch()
  //!! USE State Hoocks
  const [formData, setformData] = useState({
    Date: new Date().toLocaleDateString(),
    Time: new Date().toLocaleTimeString(),
    travellingforwork: "yse",
    orderdID: state._id,
  });
  console.log("formData", formData);
  console.log("Rdxstate", Rdxstate);

  /** ERROR STATE  for email validation and verification */
  const [error, seterror] = useState({});
  const [conferr, setconferr] = useState(false);

  /** SUBMIT all text feald combine one State Object calld [form] */
  const SubmitHandler = (e) => {
    // toast.loading('please wait...')
    e.preventDefault();

    /** FORM DATA CHECKING  */
    if (!formData?.Email || !formData?.FullName || !formData?.travellingforwork) {
      toast.error("please fill all fields");
    } else if (Rdxstate?.date[0]?.endDate === "Check-out") {
      toast.error("please select your check out date");
    } else {
      toast.success(`your boocking Succussfully`);
      dispach(FormSummitStatus(2))
      BockingHandler({ formData, Rdxstate });

    }
  };
  /** Email validation */
  const emailValidation = (macheml) => {
    const em = formData.Email;
    if (em === macheml) {
      setconferr(false);
    } else {
      setconferr(true);
    }
  };
  return (
    <div>
      <Toaster />
      <div className="box-container fdc">
        Enter your details
        <div className="alert alert-success" role="alert">
          Almost done! Just fill in the <span>*</span> required info
        </div>
        <div className="form-check df fdr">
          <form onSubmit={(e) => SubmitHandler(e)}>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">Are you travelling for work?</FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="travellingforwork"
                value={formData.travellingforwork}
                onChange={(e) =>
                  setformData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  })
                }
              >
                <FormControlLabel value="yes" control={<Radio />} label="yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            <Box component="form">
              <div>
                <TextField
                  name="FullName"
                  required
                  id="filled-required"
                  label="FullName"
                  size="small"
                  variant="filled"
                  onChange={(e) =>
                    setformData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
              <div style={{ marginTop: 15, display: "flex", gap: 5 }}>
                <TextField
                  size="small"
                  error={error}
                  id="filled-error"
                  label="Email address"
                  variant="filled"
                  name="Email"
                  {...error && {helperText :"Incorrect entry."} }
                  {...!error && {color :"success"} }
                  
                  onChange={(e) => {
                    seterror(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value));

                    setformData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
                {formData?.Email && (
                  <TextField
                    size="small"
                    error={conferr}
                    id="filled-error"
                    label="Confirm email address"
                    variant="filled"
                    {...conferr &&  {helperText : "Password not mach...!"} }
                    {...!conferr && {color :"success"} }
                    onChange={
                      (e) => {
                        emailValidation(e.target.value);
                      }

                     
                    }
                  />
                )}
              </div>
            </Box>
            <Box></Box>

            <ul className="form-style-1">
              <li>
                <LoadingButton
                  loading={false}
                  loadingPosition="start"
                  type="submit"
                  value="Submit"
                  
                  startIcon={<PanToolAltRoundedIcon color="success" />}
                  variant="outlined"
                >
                  Submit
                </LoadingButton>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formcontainer;
