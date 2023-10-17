import { Box } from "@mui/material";
import ExpandField from "./ExpandField";
import { useState } from "react";

const requiredInfo = [
	{
		state: "school",
		label: "School",
		multiLine: false,
	},
	{
		state: "city",
		label: "City",
		multiLine: false,
	},
	{
		state: "field",
		label: "Field",
		multiLine: false,
	},

	{
		state: "startingYear",
		label: "Starting Year",
		multiLine: false,
	},
	{
		state: "endingYear",
		label: "Starting Year",
		multiLine: false,
	},
	{
		state: "gpa",
		label: "GPA",
		multiLine: false,
	},
];

const Education = () => {
	const [education, setEducation] = useState({
		school: null,
		city: null,
		field: null,
		startingYear: null,
		endingYear: null,
		gpa: null,
	});

	const addEducation = () => {
		setEducation([
			...education,
			{
				school: null,
				city: null,
				field: null,
				startingYear: null,
				endingYear: null,
				gpa: null,
			},
		]);
	};

	const handleChange = (fieldName, value) => {
		setEducation((prevEducation) => ({
			...prevEducation,
			[fieldName]: value,
		}));
	};
	console.log(education);
	return (
		<Box fontStyle={{ marginTop: "4%" }}>
			<ExpandField
				title={"Education"}
				requiredInfo={requiredInfo}
				handleChange={handleChange}
			/>
		</Box>
	);
};

export default Education;
