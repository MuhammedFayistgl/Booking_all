import "./header.scss";
import { Navbar, Container, } from "rsuite";

import { Link, useNavigate } from "react-router-dom";
import Searchbox from "../Searchbox/Searchbox";
import { Nav } from "rsuite";

import FacebookSquareIcon from "@rsuite/icons/legacy/FacebookSquare";
import SearchPeopleIcon from "@rsuite/icons/SearchPeople";
import ChromeIcon from "@rsuite/icons/legacy/Chrome";
import EllipsisHIcon from "@rsuite/icons/legacy/EllipsisH";
import DropboxIcon from "@rsuite/icons/legacy/Dropbox";
import GitlabIcon from "@rsuite/icons/legacy/Gitlab";
import LinuxIcon from "@rsuite/icons/legacy/Linux";

const Header = ({ type, wlcom }) => {
	const navigate = useNavigate();

	return (
		<>
			<Navbar appearance="inverse" className="header">
				<Nav>
					<Nav.Item icon={<FacebookSquareIcon />}>facebook</Nav.Item>
					<Nav.Item icon={<ChromeIcon />}>chrome</Nav.Item>
					<Nav.Menu icon={<EllipsisHIcon />} title="more...">
						<Nav.Item icon={<DropboxIcon />}>dropbox</Nav.Item>
						<Nav.Item icon={<SearchPeopleIcon />}>
							<Link to={"/profile"}>Profile</Link>
						</Nav.Item>
						<Nav.Item icon={<GitlabIcon />}>gitlab</Nav.Item>
						<Nav.Item icon={<LinuxIcon />}>linux</Nav.Item>
					</Nav.Menu>
				</Nav>
			</Navbar>
			<Container className="headerContainer">
				<div className="headerTitleContainer">
					<h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
					<p className="headerDesc">
						Get rewarded for your travels – unlock instant savings of 10% or more with a free Lamabooking account
					</p>
					<Searchbox />
				</div>
			</Container>
		</>
	);
};

export default Header;
