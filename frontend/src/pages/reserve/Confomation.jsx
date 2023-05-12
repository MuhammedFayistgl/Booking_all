import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Button from "react-bootstrap/Button";
import Card from "../../components/Card/Card";

import "./confomation.scss";
import Form from "../Form/Form";
import { Step, StepLabel, Stepper } from "@mui/material";
import Searchbox from "../../components/Searchbox/Searchbox";
import { useSelector } from "react-redux";
import BockingDeatials from "../../components/Bocking Deatials/BockingDeatials";
import { useLocation } from "react-router-dom";
// import { useLocation } from "react-router-dom";

const Confomation = () => {
  const {state} = useLocation()
  // console.log("State", state);
  return (
    <div>
      <Navbar />

      <div className="allcontainer">
        <div className="innercontainer">
          <Stepper
            style={{ marginTop: 30, marginBottom: 20 }}
            activeStep={1}
            alternativeLabel
          >
            <Step>
              <StepLabel>{"ghj"}</StepLabel>
            </Step>
            <Step>
              <StepLabel>{"ghj"}</StepLabel>
            </Step>
            <Step>
              <StepLabel>{"ghj"}</StepLabel>
            </Step>
          </Stepper>
          <div style={{ position: "relative" }}>
            //** Disable Search button Props */
            <Searchbox butonDesable={true} />
          </div>

          <div className="all-wrapper">
            <div className="lift">
              {/* bocking dealtails component */}

              <BockingDeatials />

              <div className="price-details box-container  bg-light">
                <div className="price-container  ">
                  <h5>Price</h5>
                  <span>₹{state.amount}</span>
                </div>
                <span>(for 2 guests)</span>
                <div className="extra-  ">
                  <h5>Excluded charges</h5>
                  <div className="price-container">
                    <span>Goods & services tax</span>
                    <span>₹ {state.amount/100}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
            {/* this is fom props see avilability button disable */}
              <Card seavblbutton={false} ></Card>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confomation;
