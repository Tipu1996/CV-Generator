import { Grid } from "@mui/material";
import DataEntry from "./DataEntry";

const Body = () => {
	const handleDataSubmission = (data) => {
		// Do something with the data, e.g., set it in the state or call a function
	};

	return (
		<Grid container justifyContent={"space-evenly"}>
			<Grid item xs={10} md={5} textAlign={"center"} marginTop={"4%"}>
				<DataEntry />
			</Grid>
			<Grid item xs={10} md={5} textAlign={"center"}>
				{/* Add the CV Page here */}
			</Grid>
		</Grid>
	);
};
export default Body;
