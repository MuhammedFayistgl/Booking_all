import React from "react";

import Navbar from "../../components/navbar/Navbar.jsx";
import Searchbox from "../../components/Searchbox/Searchbox.js";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./hotellist.scss";
import Filterlist from "../../components/Flterlist/Filterlist.js";
import Footer from "../../components/footer/Footer.jsx";

const HotelList = () => {
  //** STATE  */

  return (
    <div>
      <Navbar />
      <div className=" hotellist-container ">
        <div className=" hotellist-headng">
          <h1>Find the perfect hotel </h1>
          <p>From cheap hotels to luxury rooms and everything in between</p>
          <Searchbox type={"hotallist"} />

          {/* HRADER    */}

         
        </div>
      </div>
      <div className="heder ">
      <div className="hedercontent">
         <div className="left">
            <h3>Last minute hotels near you</h3>
            <p>Find a great deal on a hotel for tonight or an upcoming trip</p>
            </div>
            <div className="right">
              <ButtonGroup size="md" className="mb-2">
                <Button  >Hotels fot tonight</Button>
                <Button variant="light">Hotels for this weekend</Button>
              </ButtonGroup>
            </div>
            
      </div>
           
          </div>
          <div className="filterd-wraper">
          <div className="filterd-items-wraper">
             <Filterlist style ={'img-siz-dcrs'} />
             <Filterlist style ={'img-siz-dcrs'} />
             <Filterlist style ={'img-siz-dcrs'} />
             <Filterlist style ={'img-siz-dcrs'} />
             <Filterlist style ={'img-siz-dcrs'} />
             <Filterlist style ={'img-siz-dcrs'} />
             
           
          </div>
          
          </div>
          <div className="button-see-more">
             <Button variant="primary">Hotels for this weekend</Button>
          </div>
 <div className="filterd-wraper">
  <div className="filterd-items-wraper">
     <Footer/>
  </div>
 </div>
         
         
    </div>
  );
};

export default HotelList;
