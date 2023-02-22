import { useNavigate } from "react-router-dom";
import data from "./data";
import "./searchItem.scss";

const SearchItem = ({ options }) => {
  const navigate = useNavigate();
  return (
    <>
      {data.map((item, key) => {
        return (
          <div key={key} className="searchItem">
            <img
              onClick={() => navigate(`/hotel/${item.id}`)}
              src={item.src}
              alt=""
              className="siImg"
            />
            <div className="siDesc">
              <h1
                onClick={() => navigate(`/hotel/${item.id}`)}
                className="siTitle"
              >
                {item.name}
              </h1>
              <span className="siDistance">{`${item.distance} from center`}</span>
              <span className="siTaxiOp">Free airport taxi</span>
              <span className="siSubtitle">
                Studio Apartment with Air conditioning
              </span>
              <span className="siFeatures">
                Entire studio • 1 bathroom • 21m² 1 full bed
              </span>
              <span className="siCancelOp">Free cancellation </span>
              <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
              </span>
            </div>
            <div className="siDetails">
              <div className="siRating">
                <div className="star-rate">
                  <span>Excellent</span>
                  <div className="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
                <button>8.9</button>
              </div>
              <div className="siDetailTexts">
                <span className="siPrice">{item.price}</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See availability</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SearchItem;
