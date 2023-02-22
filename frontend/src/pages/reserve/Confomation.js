import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Button from "react-bootstrap/Button";
import Card from "../../components/Card/Card";

import "./confomation.scss";
import Form from "../Form/Form";

const Confomation = () => {
  return (
    <div>
      <Navbar />

      <div className="allcontainer">
        <div className="innercontainer">
          <div className="progressbar">
            <div className="section1">
              <i class="fa-sharp fa-solid fa-circle-check"></i>
              <div className="text">
                <span>Your selection</span>
              </div>
            </div>
            <hr />
            <div className="section2">
              <i class="fa-sharp fa-solid fa-circle-check"></i>
              <div className="text">
                <span>Your selection</span>
              </div>
            </div>
            <hr />
            <div className="section3">
              <i class="fa-sharp fa-solid fa-circle-check"></i>
              <div className="text">
                <span>Your selection</span>
              </div>
            </div>
          </div>
          <div className="all-wrapper">
               <div className="lift">
          <div className="bocking-deatealse box-container">
            <h5>Your booking details</h5>
            <span className="deteals">
              <div className="Check-in">
                <h5>Sun 19 Feb 2023</h5>
                <span> 14:00 – 00:00</span>
              </div>
              <hr />
              <div className="Check-out">
                <h5>Mon 20 Feb 2023</h5>
                <span>00:00 – 11:00</span>
              </div>
            </span>
            <span>Total length of stay:</span>
            <h5>1 night</h5>
            <hr />
            <h5>You selected:</h5>
            <span>Standard Double Room with Fan</span>
            <Button variant="outline-light">Change your selection</Button>{" "}
          </div>
          <div className="price-details box-container  bg-light">
            <div className="price-container  ">
              <h5>Price</h5>
              <span>₹1,200</span>
            </div>
            <span>(for 2 guests)</span>
            <div className="extra-  ">
            <h5>Excluded charges</h5>
            <div className="price-container">
               <span>Goods & services tax</span>
               <span>₹ 144</span>
            </div>
           

            </div>
          </div>
          </div>
          <div className="right">
          <Card></Card>
          <Form/>

          
          </div>
          </div>
       
         
        </div>
      </div>
    </div>
  );
};

export default Confomation;
