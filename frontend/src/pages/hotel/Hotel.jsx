import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CnfmBTN from "./CnfmBTN";
import Information from "./Information";
import Catagoryinfo from "./Catagoryinfo";
import AmountInfo from "./AmountInfo";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const { _id } = useParams()
  const state = useSelector((state) => state.HotelSlice.allHotals.data)?.filter(state => { return state._id == _id })[0]

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? state.extraImages.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === state.extraImages.length - 1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Header */}
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <i
              class="fa-sharp fa-solid fa-circle-xmark"
              icon={"fa-sharp fa-solid fa-circle-xmark"}
              className="close fa-sharp fa-solid fa-circle-xmark"
              onClick={() => setOpen(false)}
            ></i>
            <i
              class="fa-solid fa-circle-arrow-left"
              // icon={faCircleArrowLeft}
              className="arrow fa-solid fa-circle-arrow-left"
              onClick={() => handleMove("l")}
            ></i>

            <div className="sliderWrapper">
              <img src={state?.extraImages[slideNumber].Url} alt="sliderImg" className="sliderImg" />
            </div>
            <i
              class="fa-solid fa-circle-arrow-right"
              //  icon={faCircleArrowRight}
              className="arrow fa-solid fa-circle-arrow-right"
              onClick={() => handleMove("r")}
            ></i>
          </div>
        )}
        <div className="hotelWrapper">
          {/* Confom button */}
          <CnfmBTN bookNow={"bookNow"} />
          {/* infomation Component */}
          <Information />
          <div className="hotelImages">
            {state?.extraImages?.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img onClick={() => handleOpen(i)} src={photo.Url} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            {/* Discription */}
            <Catagoryinfo />
            <div className="hotelDetailsPrice">
              {/* AmountInformation */}
              <AmountInfo />
              <CnfmBTN />
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
