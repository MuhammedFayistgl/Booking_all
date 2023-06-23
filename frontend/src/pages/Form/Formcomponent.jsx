import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PhoneNvalidation from "./PhoneNvalidation";
import NameFilled from "./NameFilled";
import EmailFilled from "./EmailFilled";
import SummitBTN from "./SummitBTN";
import { Box } from '@mui/material';
const Formcomponent = () => {
    const Dispath = useDispatch();
    const state = useSelector((state) => state.userBocking)
    const SubmitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <form onSubmit={(e) => SubmitHandler(e)}>
                <Box component="form">
                    <NameFilled />
                    <div style={{ marginTop: 15, display: "flex", gap: 5 }}>
                        <EmailFilled />
                        <PhoneNvalidation />
                    </div>
                </Box>
                <SummitBTN />
            </form>
        </>
    )
}

export default Formcomponent