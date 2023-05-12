import React from "react";

import Navbar from "../../components/navbar/Navbar.jsx";
import Searchbox from "../../components/Searchbox/Searchbox.jsx";

// import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./hotellist.scss";
import Filterlist from "../../components/Flterlist/Filterlist.jsx";
import Footer from "../../components/footer/Footer.jsx";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const HotelList = () => {
  //** STATE  */
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

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
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton value="web">Hotels fot tonight</ToggleButton>
              <ToggleButton value="android">
                Hotels for this weekend
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
      </div>
      <div className="filterd-wraper">
        <div className="filterd-items-wraper">
        {/* image List */}
          <Filterlist style={"img-siz-dcrs"} />
        </div>
      </div>
      <div className="button-see-more">
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="web">Hotels fot tonight</ToggleButton>
          <ToggleButton value="android">Hotels for this weekend</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="filterd-wraper">
        <div className="filterd-items-wraper">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HotelList;
// disabled
