import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//*? import pages */
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/authentication/login";
import HotelList from "./pages/hotelList/HotelList";
import Confomation from "./pages/reserve/Confomation";
import Sign from "./pages/authentication/Sign";
import { useEffect } from "react";
import { Axios } from "axios";
import { dataCollection } from "./Helper/database/DatabaceConnuction";
import { useDispatch } from "react-redux";

function App() {
  const dispach = useDispatch()
// all data collect server  then dispatche through this function 'HotelApiDataSeter'
useEffect(() => {
 dataCollection(dispach)


}, [])


  return (
    <BrowserRouter>
      <Routes>
         <Route path="/login"  element={<Login/>} />
         <Route path="/signUp"  element={<Sign/>} />
        <Route path="/" element={<Home/>}/>
        <Route path="/hotelslist" element={<List/>}/>
        <Route path="/filterhotels" element={<HotelList/>}/>
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/confometon" element={<Confomation/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
