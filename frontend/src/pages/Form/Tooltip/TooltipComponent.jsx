import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

const TooltipComponent = () => {
  const { _id } = useParams()
  const state = useSelector((state) => state.HotelSlice.allHotals.data)?.filter(state => { return state._id == _id })[0]
  return (
    <>
      <div className="price-details box-container ">
        
        
        <div className="extra-  ">
          <h5>Excluded charges</h5>
          <span>(for 2 guests)</span>
          <hr />
          <div className="price-container" style={{display:"flex",flexDirection:"column"}}>
            <span>Goods & services tax</span>
            
            <span>₹ {state?.amount / 100}</span>
          </div>
        </div>
        <div className="price-container  ">
          <h5>Price</h5>
          <span>₹{state?.amount}</span>
        </div>
      </div>
    </>
  );
};

export default TooltipComponent;
