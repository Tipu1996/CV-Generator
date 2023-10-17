import { Grid } from "@mui/material";
import PersonalInfo from "./PersonalInfo";

const Body = () => {
	return (
		<Grid container justifyContent={"space-evenly"}>
			<Grid item xs={10} md={5} textAlign={"center"} marginTop={"4%"}>
				{/* Add the Forms here */}
				<PersonalInfo />
			</Grid>
			<Grid item xs={10} md={5} textAlign={"center"}>
				{/* Add the CV Page here */}
			</Grid>
		</Grid>
	);
};
export default Body;
