import { Grid } from "@mui/material";
import DataEntry from "./DataEntry";
import { useState } from "react";

const Body = () => {
	// Personal Info State
	const [personalInfo, setPersonalInfo] = useState({
		firstName: null,
		lastName: null,
		dateOfBirth: null,
		gender: null,
		phoneNumber: null,
		emailAddress: null,
		linkedIn: null,
		aboutMe: null,
	});

	// Experience State
	const [experience, setExperience] = useState({
		position: null,
		company: null,
		startYear: null,
		endYear: null,
		jobDescription: null,
	});

	// Function to add a new experience entry
	const addExperience = () => {
		setExperience([
			...experiences,
			{
				position: null,
				company: null,
				startYear: null,
				endYear: null,
				jobDescription: null,
			},
		]);
	};

	// Education State
	const [education, setEducation] = useState({
		school: null,
		city: null,
		field: null,
		startingYear: null,
		endingYear: null,
		gpa: null,
	});

	// Function to add a new education entry
	const addEducation = () => {
		setEducation([
			...educations,
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
	return (
		<Grid container justifyContent={"space-evenly"}>
			<Grid item xs={10} md={5} textAlign={"center"} marginTop={"4%"}>
				{/* Add the Forms here */}
				<DataEntry
					personalInfo={personalInfo}
					setPersonalInfo={setPersonalInfo}
					experience={experience}
					setExperience={setExperience}
					addExperience={addExperience}
					education={education}
					setEducation={setEducation}
					addEducation={addEducation}
				/>
			</Grid>
			<Grid item xs={10} md={5} textAlign={"center"}>
				{/* Add the CV Page here */}
			</Grid>
		</Grid>
	);
};
export default Body;
