import React from "react";
import { useLocation } from "react-router-dom";

const TooltipComponent = () => {
  const { state } = useLocation();
  return (
    <>
      <div className="price-details box-container ">
        
        
        <div className="extra-  ">
          <h5>Excluded charges</h5>
          <span>(for 2 guests)</span>
          <hr />
          <div className="price-container" style={{display:"flex",flexDirection:"column"}}>
            <span>Goods & services tax</span>
            
            <span>₹ {state.amount / 100}</span>
          </div>
        </div>
        <div className="price-container  ">
          <h5>Price</h5>
          <span>₹{state.amount}</span>
        </div>
      </div>
    </>
  );
};

export default TooltipComponent;
