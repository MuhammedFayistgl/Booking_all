import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";
import Drower from "../Drower/Drower";
import { Button, ButtonToolbar, IconButton } from "rsuite";
import { useDispatch, useSelector } from "react-redux";
import { BsBootstrap } from "react-icons/bs";
import OnlineStatus from "../OnlineStatus/OnlineStatus";
import { useCookies } from "react-cookie";
import Confirmalertbutton from "./ConfrmlogoutBTN/Confirmloginalert";
import { DrowerSetOpen } from "../../Reducs/userBockingSlice";
import { Container } from "@mui/material";
import {  Avatar } from 'rsuite';
import { gerUser } from "../../utils/BookingHelper";
const Navbar = ({wlcom}) => {
	let navigate = useNavigate();
	const dispath = useDispatch();
	const [cookies, setCookie, removCookie] = useCookies();

	const BookData = true;
	const user = gerUser();
	return (
		<div className="navbar">
			<Container>
					<div className="navContainer">
				<Link to={"/"}>
        <span className="logo"> {wlcom ? `Welcome to ` : null} HotelDelay</span>
				</Link>
				<div className="navItems">
					{BookData && user && (
						<ButtonToolbar style={{ position: "absolute", right: "114%" }}>
							<IconButton
								onClick={() => dispath(DrowerSetOpen(true))}
								icon={<BsBootstrap />}
								color="blue"
								appearance="primary"
								circle
							/>
						</ButtonToolbar>
					)}

					<Drower />
					
					{cookies.token ? (
						<Confirmalertbutton />
					) : (
						<Button onClick={() => navigate("/login")} color="cyan" appearance="ghost">
							login
						</Button>
					)}

					<Button style={{marginleft:3}} onClick={() => navigate("/signUp")} color="blue" appearance="subtle">
						Register
					</Button>
					
				</div>
			</div>
			<OnlineStatus />
			</Container>
		
		</div>
	);
};

export default Navbar;
