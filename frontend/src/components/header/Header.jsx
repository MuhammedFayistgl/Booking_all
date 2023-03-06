import "./header.css";

import { useNavigate } from "react-router-dom";
import Searchbox from "../Searchbox/Searchbox";
import vedio from '../../assets/production ID_4193130.mp4'

const Header = ({ type }) => {
  const navigate = useNavigate();

  return (
    <div className="header">
      {/* <img
      className="header-main-background-img"
        src="https://images.unsplash.com/photo-1645978216208-8f29150e55c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="main-bg"
       
      /> */}
     {/* <video src={vedio} autoPlay={true}/> */}
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

            <Searchbox />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
