import React, { useState } from 'react'
import TooltipComponent from './Tooltip/TooltipComponent'
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton'
import PanToolAltRoundedIcon from "@mui/icons-material/PanToolAltRounded";
import { useDispatch, useSelector } from 'react-redux';
import Tooltip from "@mui/material/Tooltip";



const SummitBTN = () => {
    const Dispath = useDispatch();
    const state = useSelector((state) => state.userBocking.bookDeatilse)

    const vfyEmail = state?.Email?.isValid
    const vfyName = state?.FullName
    const vfyPhone = state?.Phone?.isValid

    return (
        <ul className="form-style-1">
            <li>
                {vfyEmail && vfyName && vfyPhone && (
                    <Tooltip title={<TooltipComponent />}>
                        <LoadingButton
                            loading={false}
                            loadingPosition="start"
                            type="submit"
                            value="Submit"
                            startIcon={<PanToolAltRoundedIcon color="success" />}
                            variant="outlined"
                        >
                            Submit
                        </LoadingButton>
                    </Tooltip>
                )}
            </li>
        </ul>
    )
}

export default SummitBTN
