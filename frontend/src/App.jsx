import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import "rsuite/dist/rsuite.min.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import { dataCollection } from "./Reducs/extraSlice";
import { useCookies } from "react-cookie";
import { Toaster } from "react-hot-toast";
import { Loader } from "rsuite";
import Navbar from "./components/navbar/Navbar";
import ProfileComponent from "./pages/ProfileComp/ProfileComponent";

//*? import pages */
const Home = lazy(() => import("./pages/home/Home"));
const Hotel = lazy(() => import("./pages/hotel/Hotel"));
const List = lazy(() => import("./pages/list/List"));
const Login = lazy(() => import("./pages/authentication/login"));
const HotelList = lazy(() => import("./pages/hotelList/HotelList"));
const Confomation = lazy(() => import("./pages/reserve/Confomation"));
const Sign = lazy(() => import("./pages/authentication/Sign"));
const Otp = lazy(() => import("./pages/authentication/Otp"));
const ProtectedRoute = lazy(() => import("./components/Privet.route/ProtectedRoute"));
const History = lazy(() => import("./components/History/History"));
/** fontsource */
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";

function App() {
	axios.defaults.withCredentials = true;

	const [cookies, setCookie] = useCookies();

	const dispach = useDispatch();
	// all data collect server  then dispatche through this function 'HotelApiDataSeter'
	useEffect(() => {
		dispach(dataCollection());
	}, [cookies]);

	return (
		<BrowserRouter>
			<Toaster />
			<Suspense fallback={<Loader center speed="fast" size="md" />}>
				<Routes history={History}>
					<Route path="/login" element={<Login />} />
					<Route path="/signUp" element={<Sign />} />
					<Route path="/otp" element={<Otp />} />
					<Route path="/" element={<Home />} />
					<Route  element={<Outlet />}>
						<Route path="/profile"element={<ProfileComponent />} />
					</Route>
					<Route path="/hotelslist" element={<List />} />
					<Route path="/filterhotels/:params" element={<HotelList />} />
					<Route path="/hotel/:_id" element={<Hotel />} />
					<Route element={<ProtectedRoute />}>
						<Route path="/confometon/:_id" element={<Confomation />} />
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
