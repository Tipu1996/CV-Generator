import { Box, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const EducationPart = ({ education }) => {
	// const [experience, setExperience] = useState({
	// 	position: "Trainee",
	// 	company: "SCO, Rawalpindi Pakistan",
	// 	startYear: 2019,
	// 	endYear: 2022,
	// 	jobDescription:
	// 		"Network Manager Network Manager Network Manager Network Manager Network Manager Network Manager Network Manager Network Manager Network Manager",
	// });
	// const [education, setEducation] = useState({
	// 	school: "School of Self Learning and Non Tutorial Loop",
	// 	city: "Housten, Texas",
	// 	field: "TraineeShip",
	// 	startYear: 2022,
	// 	endYear: 2023,
	// 	gpa: "3/3",
	// });
	console.log(education);
	return (
		<Box>
			<Typography
				variant="h6"
				style={{
					paddingTop: "2%",
					paddingBottom: "3%",
					fontWeight: "bold",
				}}>
				Education
			</Typography>
			<Divider
				sx={{
					backgroundColor: (theme) => theme.palette.secondary.main,
					height: 4,
					marginTop: "1%",
					marginBottom: "3%",
					fontWeight: "bold",
				}}
			/>
			<Typography variant="body1">
				{education.startYear} - {education.endYear} {education.school}
			</Typography>
			<Typography variant="body1" style={{ fontWeight: "bold" }}>
				{education.field}
			</Typography>
			<Divider
				sx={{
					backgroundColor: (theme) => theme.palette.secondary.main,
					height: 2,
					marginTop: "1.5%",
					marginBottom: "2%",
				}}
			/>
			<Typography variant="body1">{education.gpa}</Typography>
		</Box>
	);
};

export default EducationPart;
