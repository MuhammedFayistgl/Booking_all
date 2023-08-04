import React from "react";
import { setUseername } from "../../Reducs/userBockingSlice";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "rsuite";

const NameFilled = () => {
	const Dispath = useDispatch();
	const state = useSelector((state) => state.userBocking);
	return (
		<>
			<Input
				placeholder="FullName"
				value={state?.FullName}
				onChange={(value) => Dispath(setUseername(value))}   
				required
				name="FullName"
				size="md"
			/>
		</>
	);
};

export default NameFilled;
