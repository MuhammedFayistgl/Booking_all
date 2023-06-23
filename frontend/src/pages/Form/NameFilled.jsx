import { TextField } from '@mui/material'
import React from 'react'
import { setUseername } from '../../Reducs/userBockingSlice';
import { useDispatch, useSelector } from 'react-redux';

const NameFilled = () => {
    const Dispath = useDispatch();
    const state = useSelector((state) => state.userBocking)
    return (
        <div>
            <TextField
                value={state?.FullName}
                name="FullName"
                id="outlined-required"
                required
                label="FullName"
                size="small"
                variant="filled"
                onChange={(e) => Dispath(setUseername(e.target.value))
                }
            />
        </div>
    )
}

export default NameFilled
