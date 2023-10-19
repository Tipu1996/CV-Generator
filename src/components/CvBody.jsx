import { Box, Divider } from "@mui/material";
import PersonalPart from "./PersonalPart";
import ExperiencePart from "./ExperiencePart";
import EducationPart from "./EducationPart";

const CvBody = ({ formData }) => {
	return (
		<Box margin={"10%"}>
			<PersonalPart personalInput={formData.personalInput} />

			<ExperiencePart />
			<EducationPart />
		</Box>
	);
};

export default CvBody;
