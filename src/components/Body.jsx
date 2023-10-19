import { Grid } from "@mui/material";
import DataEntry from "./DataEntry";
import { useState } from "react";
import CvBody from "./CvBody";

const Body = () => {
	const [formData, setFormData] = useState({
		personalInput: {},
		experience: {},
		education: {},
	});

	const pushStatesUp = (data, category) => {
		setFormData((prevData) => ({
			...prevData,
			[category]: data,
		}));
	};
	// console.log(formData);

	return (
		<Grid container justifyContent={"space-evenly"}>
			<Grid item xs={10} md={5} textAlign={"center"} marginTop={"4%"}>
				<DataEntry pushStatesUp={pushStatesUp} />
				{/* <Submit /> */}
			</Grid>
			<Grid item xs={10} md={5}>
				<CvBody formData={formData} />
			</Grid>
		</Grid>
	);
};
export default Body;
