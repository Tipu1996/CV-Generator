import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Experience from "./Experience";
import Submit from "./Submit";
import { Box } from "@mui/material";

const DataEntry = () => {
	return (
		<>
			<PersonalInfo />
			<Experience />
			<Education />
			<Box fontStyle={{ marginTop: "4%" }}>
				<Submit />
			</Box>
		</>
	);
};

export default DataEntry;
