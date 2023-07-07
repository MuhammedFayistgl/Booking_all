import React from "react";
import "./card.scss";
import { useLocation, useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { useSelector } from "react-redux";

const Card = ({ seavblbutton }) => {
  const { _id } = useParams()
  const state = useSelector((state) => state.HotelSlice.allHotals.data)?.filter(state => { return state._id == _id })[0]
  return (
    <>
      <div className="searchItem">
      
        <div className="siDesc">
        <img src={state?.profilImg} alt="" className="siImg" />
          <h1 style={{lineHeight:1}} className="siTitle">{state?.name}</h1>
          <span className="siDistance">{`hhh from center`}</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">Studio Apartment with Air conditioning</span>
          <span className="siFeatures">Entire studio • 1 bathroom • 21m² 1 full bed</span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <div className="star-rate">
              {state?.rating === 5 && <span style={{ color: "green" }}>Excellent</span>}
              {state?.rating === 3 && <span style={{ color: "#ffc107" }}>good</span>}
              {state?.rating === 4 && <span style={{ color: "green" }}>Excellent</span>}
              {state?.rating === 2 && <span style={{ color: "red" }}>Avarage</span>}
              {state?.rating === 1 && <span style={{ color: "red" }}>Avarage</span>}
              <div className="stars">
                <Rating name="read-only" value={state?.rating} readOnly />
              </div>
            </div>
            <button>{state?.rating}.9</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">{state?.amount}</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            {seavblbutton && <button className="siCheckButton">See availability</button>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
