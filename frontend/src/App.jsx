import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import 'rsuite/dist/rsuite.min.css';

//*? import pages */
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/authentication/login";
import HotelList from "./pages/hotelList/HotelList";
import Confomation from "./pages/reserve/Confomation";
import Sign from "./pages/authentication/Sign";
import { useEffect } from "react";

import { dataCollection } from "./Helper/database/DatabaceConnuction";
import { useDispatch } from "react-redux";
import Otp from "./pages/authentication/Otp";
import axios from "axios";

function App() {
  axios.defaults.withCredentials = true;
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
         <Route path="/otp"  element={<Otp/>} />
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
