import { Grid } from "@mui/material";
import DataEntry from "./DataEntry";
import { useState } from "react";

const Body = () => {
	return (
		<Grid container justifyContent={"space-evenly"}>
			<Grid item xs={10} md={5} textAlign={"center"} marginTop={"4%"}>
				{/* Add the Forms here */}
				<DataEntry />
			</Grid>
			<Grid item xs={10} md={5} textAlign={"center"}>
				{/* Add the CV Page here */}
			</Grid>
		</Grid>
	);
};
export default Body;
