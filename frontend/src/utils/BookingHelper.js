import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginVerification } from "../Reducs/extraSlice";

export const getPropertyHelper = () => {

    const orderdID = useSelector((state) => { return state.userBocking?.myBookDeatilse?.data });
    const idarr = orderdID?.map((itm) => { return itm.orderdID})
    console.log('idarr',idarr);
    const state = useSelector((state) =>{return state.HotelSlice.allHotals.data});
    const FilterNewOreders = state?.filter((itm)=>  {return idarr?.includes(itm._id)})

       
    return FilterNewOreders
}
export const gerUser = () => {
    const Dispatch = useDispatch();
    const userData = useSelector((state) => { return state.loginSlice?.loginVerification?.data });

    useEffect(() => {
        Dispatch(loginVerification());

    }, [userData?.profileUrl]);
    return userData



}