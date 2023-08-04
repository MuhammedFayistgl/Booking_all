import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const CnfmBTN = ({ bookNow }) => {
    const navigate = useNavigate();
    const { _id } = useParams()
    return (
        <button onClick={() => navigate(`/confometon/${_id}`)} {...bookNow && { className: "bookNow" }} >
            Reserve or Book Now!
            
        </button>
    )
}

export default CnfmBTN
