import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const { state } = useLocation();

  console.log("slideNumber", slideNumber);
  console.log("state", state);
  // const photos = [
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
  //   },
  // ];

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
      <Navbar />
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
          <button onClick={() => navigate("/confometon", { state })} className="bookNow">
            Reserve or Book Now!
          </button>
          <h1 className="hotelTitle">{state?.name}</h1>
          <div className="hotelAddress">
            {/* <FontAwesomeIcon icon={faLocationDot} /> */}
            <i class="fa-solid fa-location-dot"></i>
            <span>{state?.place}</span>
          </div>
          <span className="hotelDistance">Excellent location – 500m from center</span>
          <span className="hotelPriceHighlight">Book a stay over $114 at this property and get a free airport taxi</span>
          <div className="hotelImages">
            {state?.extraImages.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img onClick={() => handleOpen(i)} src={photo.Url} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                {state?.discription}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>Located in the real heart of Krakow, this property has an excellent location score of 9.8!</span>
              <h2>
                <b>{state?.amount}</b> (9 nights)
              </h2>
              <button onClick={() => navigate("/confometon", { state })}>Reserve or Book Now!</button>
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
