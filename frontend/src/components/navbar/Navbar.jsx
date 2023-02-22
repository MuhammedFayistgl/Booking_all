import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
   let navigate = useNavigate()

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to={'/'}>
          <span className="logo">HotelDelay</span>
        </Link>
        <div className="navItems">
          <button onClick={()=> navigate('/login')} className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
