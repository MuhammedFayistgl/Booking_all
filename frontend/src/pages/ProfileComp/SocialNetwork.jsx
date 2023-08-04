import React from "react";

import { Avatar, Box, Card, CardContent, Divider } from "@mui/material";
import ProfileUplodCopm from "./ProfileUplodCopm";

const SocialNetwork = () => {

	return (
		<>
			<Card style={{ borderRadius: 12, minWidth: 256, textAlign: "center" }} >
				<CardContent>
					{/* <Avatar style={{ width: 60, height: 60, margin: "auto" }} src={"https://i.pravatar.cc/300"} />
					<h3 style={{ fontSize: 18, fontWeight: "bold", letterSpacing: "0.5px", marginTop: 8, marginBottom: 0 }}>
						Alan Podemski
					</h3>
					<span style={{ fontSize: 14, 	color:'gray', marginBottom: "0.875em" }}>Poland</span> */}
                    <ProfileUplodCopm/>
				</CardContent>
				<Divider light />
				<Box display={"flex"}>
					<Box p={2} flex={"auto"} >
						<p
							style={{
								fontSize: 12,
								color:'gray',
								fontWeight: 500,
								fontFamily:
									'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
								margin: 0,
							}}
						>
							Followers
						</p>
						<p style={{ fontSize: 20, fontWeight: "bold", marginBottom: 4, letterSpacing: "1px" }} >
							6941
						</p>
					</Box>
					<Box p={2} flex={"auto"} >
						<p
							style={{
								fontSize: 12,
								color:'gray',
								fontWeight: 500,
								fontFamily:
									'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
								margin: 0,
							}}
							
						>
							Following
						</p>
						<p style={{ fontSize: 20, fontWeight: "bold", marginBottom: 4, letterSpacing: "1px" }} >
							12
						</p>
					</Box>
				</Box>
			</Card>
		</>
	);
};

export default SocialNetwork;
