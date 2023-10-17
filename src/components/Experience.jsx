import { Box } from "@mui/material";
import ExpandField from "./ExpandField";
import { useState } from "react";

const requiredInfo = [
	{
		state: "position",
		label: "Position",
		multiLine: false,
	},
	{
		state: "company",
		label: "Company",
		multiLine: false,
	},
	{
		state: "startYear",
		label: "Start Year",
		multiLine: false,
	},
	{
		state: "endYear",
		label: "End Year",
		multiLine: false,
	},
	{
		state: "jobDescription",
		label: "Job Description",
		multiLine: true,
	},
];

const Experience = () => {
	const [experience, setExperience] = useState({
		position: null,
		company: null,
		startYear: null,
		endYear: null,
		jobDescription: null,
	});

	const addExperience = () => {
		setExperience([
			...experience,
			{
				position: null,
				company: null,
				startYear: null,
				endYear: null,
				jobDescription: null,
			},
		]);
	};

	const handleChange = (fieldName, value) => {
		setExperience((prevExperience) => ({
			...prevExperience,
			[fieldName]: value,
		}));
	};

	console.log(experience);
	return (
		<Box fontStyle={{ marginTop: "4%" }}>
			<ExpandField
				title={"Experience"}
				requiredInfo={requiredInfo}
				handleChange={handleChange}
			/>
		</Box>
	);
};

export default Experience;
