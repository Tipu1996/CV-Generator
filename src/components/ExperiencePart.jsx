import { Box, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const ExperiencePart = () => {
	const [experience, setExperience] = useState({
		position: "Trainee",
		company: "SCO, Rawalpindi Pakistan",
		startYear: 2019,
		endYear: 2022,
		jobDescription:
			"Network Manager Network Manager Network Manager Network Manager Network Manager Network Manager Network Manager Network Manager Network Manager",
	});
	return (
		<Box>
			<Typography
				variant="h6"
				style={{
					paddingTop: "2%",
					paddingBottom: "3%",
					fontWeight: "bold",
				}}>
				Experience
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
				{experience.startYear} - {experience.endYear}{" "}
				{experience.company}
			</Typography>
			<Typography variant="body1" style={{ fontWeight: "bold" }}>
				{experience.position}
			</Typography>
			<Divider
				sx={{
					backgroundColor: (theme) => theme.palette.secondary.main,
					height: 2,
					marginTop: "1.5%",
					marginBottom: "2%",
				}}
			/>
			<Typography variant="body1">{experience.jobDescription}</Typography>
			<Divider
				sx={{
					backgroundColor: (theme) => theme.palette.secondary.main,
					height: 4,
					marginTop: "5%",
					marginBottom: "2%",
					fontWeight: "bold",
				}}
			/>
		</Box>
	);
};

export default ExperiencePart;
