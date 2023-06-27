import { BrowserRouter, Routes, Route } from "react-router-dom";

import "rsuite/dist/rsuite.min.css";

//*? import pages */
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/authentication/login";
import HotelList from "./pages/hotelList/HotelList";
import Confomation from "./pages/reserve/Confomation";
import Sign from "./pages/authentication/Sign";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import Otp from "./pages/authentication/Otp";
import axios from "axios";
import ProtectedRoute from "./components/Privet.route/ProtectedRoute";
import { setCookies } from "./Reducs/LoginSlice";
import { dataCollection } from "./Reducs/extraSlice";
import { useCookies } from "react-cookie";
import Privetrouts from "./components/Privet.route/Privetrouts";
import ProtectOutlet from "./pages/authentication/ProtectOutlet";

function App() {
  axios.defaults.withCredentials = true;

  const [cookies, setCookie] = useCookies();

  const dispach = useDispatch();
  // all data collect server  then dispatche through this function 'HotelApiDataSeter'
  useEffect(() => {
    dispach(setCookies());
    dispach(dataCollection());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<Sign />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/" element={<Home />} />
        <Route path="/hotelslist" element={<List />} />
        <Route path="/filterhotels/:params" element={<HotelList />} />
        <Route path="/hotel/:_id" element={<Hotel />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/confometon/:_id" element={<Confomation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
