import { lazy, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {Container} from "@mui/material";
import "./hotel.scss";
import "../../components/Searchbox/Searchbox.scss";
const Header = lazy(() => import("../../components/header/Header"));
const MailList = lazy(() => import("../../components/mailList/MailList"));
const Footer = lazy(() => import("../../components/footer/Footer"));
const Navbar = lazy(() => import("../../components/navbar/Navbar"));
const CnfmBTN = lazy(() => import("./CnfmBTN"));
const Catagoryinfo = lazy(() => import("./Catagoryinfo"));
const Information = lazy(() => import("./Information"));
const AmountInfo = lazy(() => import("./AmountInfo"));

const Hotel = () => {
	const [slideNumber, setSlideNumber] = useState(0);
	const [open, setOpen] = useState(false);


	const navigate = useNavigate();
	const location = useLocation()
console.log(location);
	const { _id } = useParams();
	const state = useSelector((state) => state.HotelSlice.allHotals.data)?.filter((state) => {
		return state._id == _id;
	})[0];

	const handleOpen = (i) => {
		setSlideNumber(i);
		setOpen(true);
	};
	let newSlideNumber;

	const handleMove = (direction) => {
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
			<Container>
				<div className="hotelContainer">
				{open && (
					<div className="slider">
						<i
							icon={"fa-sharp fa-solid fa-circle-xmark"}
							className="close fa-sharp fa-solid fa-circle-xmark "
							onClick={() => setOpen(false)}
						></i>
						<i
							// icon={faCircleArrowLeft}
							className="arrow fa-solid fa-circle-arrow-left"
							onClick={() => handleMove("l")}
						></i>

						<div className="sliderWrapper">
							<img src={state?.extraImages[slideNumber].Url} alt="sliderImg" className="sliderImg" />
						</div>
						<i
							//  icon={faCircleArrowRight}
							className="arrow fa-solid fa-circle-arrow-right"
							onClick={() => handleMove("r")}
						></i>
					</div>
				)}
				<div className="hotelWrapper">
					{/* Confom button */}
					
					{/* infomation Component */}
					<Information />
					<div className="hotelImages">
						{state?.extraImages?.map((photo, i) => (
							<div className="hotelImgWrapper" key={i} onClick={()=> handleOpen(i)}>
								<LazyLoadImage className="hotelImg"  alt={"image.alt"} effect="blur" src={photo.Url} />
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
			</Container>
			
		</div>
	);
};

export default Hotel;
