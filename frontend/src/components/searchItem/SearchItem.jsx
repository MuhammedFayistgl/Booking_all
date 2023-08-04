import { useNavigate } from "react-router-dom";

import "./searchItem.scss";
import { useSelector } from "react-redux";
import { Box, Paper, Rating } from "@mui/material";

const SearchItem = ({ options }) => {
  const State = useSelector((state) => state.HotelSlice.allHotals.data);
  const SearchKeyword = useSelector((state) => state.SearchSlice.destination);
  // SearchKeyword this user searched key words ....
  const navigate = useNavigate();
  return (
    <>
      {State?.map((itm) => {
        return (
          <Paper key={itm._id} className="searchItem">
            <img onClick={() => navigate("/hotel", { state: itm })} src={itm.profilImg} alt="" className="siImg" />
            <Box className="siDesc">
              <h1 onClick={() => navigate("/hotel", { state: itm })} className="siTitle">
                {itm.name}
              </h1>
              <span className="siDistance">{`${itm.place} from center`}</span>
              {/* <span className="siTaxiOp">Free airport taxi</span>
              <span className="siSubtitle">Studio Apartment with Air conditioning</span>
              <span className="siFeatures">Entire studio • 1 bathroom • 21m² 1 full bed</span> */}
              <span className="siCancelOp">Free cancellation </span>
              {/* <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span> */}
            </Box>
            <Box className="siDetails">
              <div className="siRating">
                <div className="star-rate">
                  {itm.rating === 5 && <span style={{ color: "green" }}>Excellent</span>}
                  {itm.rating === 4 && <span style={{ color: "green" }}>Excellent</span>}
                  {itm.rating === 3 && <span style={{ color: "#ffc107" }}>good</span>}
                  {itm.rating === 2 && <span style={{ color: "red" }}>Avarage</span>}
                  {itm.rating === 1 && <span style={{ color: "red" }}>Avarage</span>}
                  <div className="stars">
                    <Rating name="read-only" size="small"  value={itm.rating} readOnly />
                  </div>
                </div>
                <button>8.9</button>
              </div>
              <div className="siDetailTexts">
                <span className="siPrice">{itm.amount}</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See availability</button>
              </div>
            </Box>
          </Paper>
        );
      })}
    </>
  );
};

export default SearchItem;
