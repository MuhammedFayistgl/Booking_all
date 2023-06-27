import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";

import "./filterlist.scss";
import { Box, Skeleton } from "@mui/material";
import { useSelector } from "react-redux";
import SkeletonCopnt from "../Skeleton/SkeletonCopnt";

const Filterlist = ({ style }) => {
  const Data = useSelector((state) => state.HotelSlice.allHotals.data);

  const navigate = useNavigate();
  const { params } = useParams()

  return (
    <>
      {Data ? (
        Data?.filter((data) => {
          return (data.category == params)
        })
        .map((itm, index) => {
          return (
            <div key={index} className="searchItem">
              <img src={itm.profilImg} alt="" className={style ? "img-siz-dcrs" : "siImg"} />

              <div
                className="siDesc"
                onClick={() => {
                  navigate(`/hotel/${itm._id}`, { state: itm });
                }}
              >
                <h1 className={style ? "NameFountsiz" : "siTitle"}>{itm.name}</h1>
                <h6>{itm.place} </h6>
              </div>
              <div className="siDetails">
                <div className="siRating">
                  <div className="star-rate">
                    {itm.rating === 5 && <span style={{ color: "green" }}>Excellent</span>}
                    {itm.rating === 4 && <span style={{ color: "green" }}>Excellent</span>}
                    {itm.rating === 3 && <span style={{ color: "#ffc107" }}>good</span>}
                    {itm.rating === 2 && <span style={{ color: "red" }}>Avarage</span>}
                    {itm.rating === 1 && <span style={{ color: "red" }}>Avarage</span>}

                    <div className="stars">
                      <Rating name="read-only" value={itm.rating} readOnly />
                    </div>
                  </div>
                  <button>{`${itm.rating}.9`}</button>
                </div>
                <div className="siDetailTexts">
                  <span className="siPrice">{itm.amount}</span>
                  <span className="siTaxOp">Includes taxes and fees</span>
                  <button className={style ? "siCheckButton-foint-siz" : "siCheckButton"}>See availability</button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <SkeletonCopnt />
      )}
    </>
  );
};

export default Filterlist;
