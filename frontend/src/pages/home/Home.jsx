import { Suspense, lazy, useEffect } from "react";
const Navbar = lazy(() => import("../../components/navbar/Navbar"));
const Featured = lazy(() => import("../../components/featured/Featured"));
const FeaturedProperties = lazy(() => import("../../components/featuredProperties/FeaturedProperties"));
const Footer = lazy(() => import("../../components/footer/Footer"));
const Header = lazy(() => import("../../components/header/Header"));
const MailList = lazy(() => import("../../components/mailList/MailList"));
const PropertyList = lazy(() => import("../../components/propertyList/PropertyList"));

import Aos from "aos";
import "aos/dist/aos.css";
import "./home.css";

import { Box, Container, Typography } from "@mui/material";
import { Loader } from "rsuite";

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
					<Typography variant="h5" component="h5" className="homeTitle">
						Browse by property type
					</Typography>
					<PropertyList />
					<Typography variant="h5" component="h5" className="homeTitle">
						Homes guests love
					</Typography>
					<FeaturedProperties />
					<MailList />
					<Footer />
				</Box>
	
		</>
	);
};

export default Home;
