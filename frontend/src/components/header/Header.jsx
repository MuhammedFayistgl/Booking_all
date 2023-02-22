import "./header.css";




import { useNavigate } from "react-router-dom";
import Searchbox from "../Searchbox/Searchbox";


const Header = ({ type}) => {

    const navigate = useNavigate();



  return (
    <div className= "header" >
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <i class="fa-solid fa-bed"></i>

            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <i class="fa-sharp fa-solid fa-plane"></i>
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <i class="fa-sharp fa-solid fa-car"></i>
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <i class="fa-solid fa-bed"></i>
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <i class="fa-sharp fa-solid fa-taxi"></i>
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="headerBtn"
            >
              Sign in / Register
            </button>
          
          <Searchbox/>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
