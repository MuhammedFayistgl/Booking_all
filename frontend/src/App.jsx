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

function App() {

  axios.defaults.withCredentials = true;

  const [cookies, setCookie] = useCookies();

  const dispach = useDispatch();
  // all data collect server  then dispatche through this function 'HotelApiDataSeter'
  useEffect(() => {

    dispach(setCookies())
    dispach(dataCollection())
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<Sign />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/" element={cookies.token ? <Home /> : <Login />} />
        <Route path="/hotelslist" element={<List />} />
        <Route path="/filterhotels" element={<HotelList />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/confometon" element={<ProtectedRoute />}>
          <Route path="" element={<Confomation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
