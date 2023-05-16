import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";

const Navbar = ({ wlcom }) => {
  let navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to={"/"}>
          <span className="logo"> {wlcom ? `Welcome to ` : null} HotelDelay</span>
        </Link>
        <div className="navItems">
          <button onClick={() => navigate("/signUp")} className="navButton">
            Register
          </button>
          <button onClick={() => navigate("/login")} className="navButton">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
