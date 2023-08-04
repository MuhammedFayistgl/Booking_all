import React from "react";
import { Dropdown } from "rsuite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Modal, ButtonToolbar, Button, Placeholder } from "rsuite";
import { useDispatch } from "react-redux";
import { cancelOrder, getmyBooking } from "../../../../Reducs/extraSlice";

const DropdownOrder = ({ id }) => {
	const Dispatch = useDispatch();
	const [open, setOpen] = React.useState(false);

	const handleOpen = (value) => {
		setOpen(true);
	};
	const handleClose = () => setOpen(false);
	const confome = () => {
		setOpen(false), Dispatch(cancelOrder(id)), Dispatch(getmyBooking());
	};
	return (
		<>
			<Dropdown appearance="primary" title="Confirmed" placement="bottomEnd" size="xs">
				<Dropdown.Item>Go to Order</Dropdown.Item>
				<Dropdown.Item onClick={() => handleOpen()}>Cancel Order</Dropdown.Item>
			</Dropdown>
			<Modal open={open} onClose={handleClose}>
				<Modal.Header>
					<Modal.Title>Are you confom to cancel</Modal.Title>
				</Modal.Header>
				<Modal.Body>{/* <Placeholder.Paragraph /> */}</Modal.Body>
				<Modal.Footer>
					<Button onClick={handleClose} appearance="subtle">
						Cancel
					</Button>
					<Button onClick={confome} appearance="primary">
						Ok
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default DropdownOrder;
