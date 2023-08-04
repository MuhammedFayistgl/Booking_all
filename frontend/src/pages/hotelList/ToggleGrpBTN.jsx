import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";

const ToggleGrpBTN = () => {
	const [alignment, setAlignment] = React.useState("tonight");

	const handleChange = (event, newAlignment) => {
		setAlignment(newAlignment);
	};
	return (
		<ToggleButtonGroup 
        color="primary" 
        value={alignment} 
        exclusive 
        onChange={handleChange} aria-label="Platform">
			<ToggleButton sx={{color:'#ffff'}}  value="tonight"> tonight</ToggleButton>
			<ToggleButton sx={{color:'#ffff'}} value="weekend">  weekend</ToggleButton>
		</ToggleButtonGroup>
	);
};

export default ToggleGrpBTN;
