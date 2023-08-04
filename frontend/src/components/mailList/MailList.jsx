import { Input, InputGroup } from "rsuite";
import "./mailList.scss";

const MailList = () => {
	return (
		<div className="mail">
			<h1 data-aos="fade-right" data-aos-duration="3000" className="mailTitle">
				Save time, save money!
			</h1>
			<span data-aos="fade-left" data-aos-duration="2500" className="mailDesc">
				Sign up and we'll send the best deals to you
			</span>
			<div className="mailInputContainer">
				<InputGroup className='inputgrupe'>
					<InputGroup.Addon> @</InputGroup.Addon>
					<Input />
				</InputGroup>
				<button className="Subscribe">Subscribe</button>
			</div>
		</div>
	);
};

export default MailList;
