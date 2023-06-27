import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";
import Drower from "../Drower/Drower";
import { Box } from "@mui/material";
import { Button, ButtonToolbar } from "rsuite";
import { DrowerSetOpen } from "../../Reducs/DrowerSettings";
import { useDispatch, useSelector } from "react-redux";
import { TbBrandBooking } from "react-icons/tb";
import OnlineStatus from "../OnlineStatus/OnlineStatus";
import { useCookies } from "react-cookie";
import Confirmalertbutton from "./ConfrmlogoutBTN/Confirmloginalert";

const Navbar = ({ wlcom }) => {
  let navigate = useNavigate();
  const dispath = useDispatch();
  const [cookies, setCookie, removCookie] = useCookies();

  const BookData = useSelector((state) => state.DrowerSettings.BockingData);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to={"/"}>
          <span className="logo"> {wlcom ? `Welcome to ` : null} HotelDelay</span>
        </Link>
        <div className="navItems">
          {BookData && (
            <ButtonToolbar style={{ position: "absolute", right: "114%" }}>
              <Button onClick={() => dispath(DrowerSetOpen(true))} color="green" appearance="primary" endIcon={<TbBrandBooking />}>
                Your Booking
              </Button>
            </ButtonToolbar>
          )}
          <Drower />
          {cookies.token ? (
            <Confirmalertbutton />
          ) : (
            <button onClick={() => navigate("/login")} className="navButton">
              Login
            </button>
          )}
          <button onClick={() => navigate("/signUp")} className="navButton">
            Register
          </button>
        </div>
      </div>
      <OnlineStatus />
    </div>
  );
};

export default Navbar;
