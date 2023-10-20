import { Box } from "@mui/material";
import PersonalPart from "./PersonalPart";
import ExperiencePart from "./ExperiencePart";
import EducationPart from "./EducationPart";

const CvBody = ({ formData }) => {
	return (
		<Box margin={"10%"}>
			<PersonalPart personalInput={formData.personalInput} />
			<ExperiencePart experience={formData.experience} />
			<EducationPart education={formData.education} />
		</Box>
	);
};

export default CvBody;
