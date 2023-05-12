import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Rating from "@mui/material/Rating";

import "./filterlist.scss";
import { Box, Skeleton } from "@mui/material";

const Filterlist = ({ style }) => {
  const [Data, setData] = useState();

console.log('data',Data);

  const navigate = useNavigate();

  useEffect(() => {
    dataCollection();
  }, []);

  const dataCollection = async () => {
    axios
      .get("http://localhost:5000/admin/getallDeteals")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {Data ? (
        Data.map((itm, index) => {
          return (
            <div  key={index} className="searchItem">
              <img
                src={itm.profilImg}
                // https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80
                alt=""
                className={style ? "img-siz-dcrs" : "siImg"}
              />

              <div
                className="siDesc"
                onClick={() => {
                  navigate('/hotel',{ state: itm});
                }}
              >
                <h1 className={style ? "NameFountsiz" : "siTitle"}>
                  {itm.name}
                </h1>
                <h6>{itm.place} </h6>
              </div>
              <div className="siDetails">
                <div className="siRating">
                  <div className="star-rate">
                    {itm.rating === 5 && <span style={{color:'green'}} >Excellent</span>}
                    {itm.rating === 4 && <span style={{color:'green'}}  >Excellent</span>}
                    {itm.rating === 3 && <span style={{color:'#ffc107'}}   >good</span>}
                    {itm.rating === 2 && <span style={{color:'red'}}  >Avarage</span>}
                    {itm.rating === 1 && <span style={{color:'red'}}  >Avarage</span>}

                    <div className="stars">
                      <Rating name="read-only" value={itm.rating}  readOnly />
                    </div>
                  </div>
                  <button>{`${itm.rating}.9`}</button>
                </div>
                <div className="siDetailTexts">
                  <span className="siPrice">{itm.amount}</span>
                  <span className="siTaxOp">Includes taxes and fees</span>
                  <button
                    className={
                      style ? "siCheckButton-foint-siz" : "siCheckButton"
                    }
                  >
                    See availability
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) :
      <Box sx={{ display: "flex", gap: 2 }}>
        <Skeleton height={200} width={170} />
        <Box width={200}>
          <Skeleton height={30} width="100%" />
          <Skeleton height={20} width="60%" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
          width={200}
        >
          <Box>
            <Skeleton height={20} width="100%" />
            <Skeleton height={20} width="100%" />
            <Skeleton height={20} width="100%" />
          </Box>

          <Box>
            <Skeleton height={20} width="100%" />
          </Box>
        </Box>
      </Box>
       
       }
     
    </>
  );
};

export default Filterlist;
