import { useSelector } from "react-redux";

export const  getPropertyHelper = (id) => { 
  
    const state = useSelector((state) => state.HotelSlice.allHotals.data)
    ?.filter(state => { return state._id == id })
    return state
}