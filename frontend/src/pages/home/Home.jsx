import { Suspense, lazy, useEffect } from "react";
import Aos from "aos";
import { Box } from "@mui/material";

const Navbar = lazy(() => import("../../components/navbar/Navbar"));
const Featured = lazy(() => import("../../components/featured/Featured"));
const FeaturedProperties = lazy(() => import("../../components/featuredProperties/FeaturedProperties"));
const Footer = lazy(() => import("../../components/footer/Footer"));
const Header = lazy(() => import("../../components/header/Header"));
const MailList = lazy(() => import("../../components/mailList/MailList"));
const PropertyList = lazy(() => import("../../components/propertyList/PropertyList"));

import "aos/dist/aos.css";
import "./home.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Profile from "../../components/header/ProfileIcon";



const Home = () => {

	useEffect(() => {
		Aos.init({ duration: 2000 });
		
		
	}, []);

	
	return (
		<>
			<Navbar />
			<Header />
			<Box className="homeContainer">
				
			
				<Featured />
				<PropertyList />
				<FeaturedProperties />
				<MailList />
				<Footer />
			</Box>
		</>
	);
};

export default Home;
