import React, { useState } from "react";

import "./form.scss";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import {
  BockingHandler,
  emailconfomationHandler,
} from "../../Helper/validation/UserHelper";
import toast, { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Formcontainer = () => {
  const { state } = useLocation();
  /** reducx state */
  const Rdxstate = useSelector((state) => state.SearchSlice);

  //!! USE State Hoocks
  const [formData, setformData] = useState({
    Date: new Date().toLocaleDateString(),
    Time: new Date().toLocaleTimeString(),
    travellingforwork: "yse",
    orderdID: state._id,
    ...Rdxstate,
  });

  /** ERROR STATE */
  const [error, seterror] = useState({});

  /** EMAILE VERIFICATION = true or false  */
  const verifi = (e) => {
    seterror({ emailerr: emailconfomationHandler(formData?.Email, e) });
  };
  /** SUBMIT all text feald combine one State Object calld [form] */
  const SubmitHandler = (e) => {
    // toast.loading('please wait...')
    e.preventDefault();

    console.log("sumit fun calld");
    /** FORM DATA CHECKING  */
    if (
      !formData?.Email ||
      !formData?.FullName ||
      !formData?.travellingforwork
    ) {
      toast.error("please fill all fields");
    }
    BockingHandler(formData);
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
              <FormLabel id="demo-controlled-radio-buttons-group">
                Are you travelling for work?
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="travellingforwork"
                value={formData.travellingforwork}
                onChange={(e) =>
                  setformData({ ...formData, [e.target.name]: e.target.value })
                }
              >
                <FormControlLabel value="yes" control={<Radio />} label="yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>

            <ul className="form-style-1">
              <li>
                <label>
                  Full Name <span className="required">*</span>
                </label>
                <input
                  onChange={(e) =>
                    setformData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                  type="text"
                  name="FullName"
                  className="field-divided"
                  placeholder="FullName"
                />
              </li>
              <li>
                <label>
                  Email address <span className="required">*</span>
                </label>
                <input
                  onChange={(e) =>
                    setformData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                  type="email"
                  name="Email"
                  className="field-long"
                />
              </li>
              <li>
                <label>
                  Confirm email address <span className="required">*</span>
                </label>

                <input
                  onChange={(e) => verifi(e.target.value)}
                  required
                  type="email"
                  name="emailVerification"
                  {...(error.emailerr
                    ? { className: "field-long" }
                    : { className: "field-long-error" })}
                />
              </li>

              <li>
              {/* <LoadingButton
          size="small"
          
          loading={true}
          variant="outlined"
          disabled
        >
          <span>disabled</span>
        </LoadingButton> */}
                <input type="submit" value="Submit" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formcontainer;
