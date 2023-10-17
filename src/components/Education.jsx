import {
	TextField,
	Typography,
	Stack,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Box,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

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

const Education = ({ education, setEducation, addEducation }) => {
	const handleChange = (fieldName, value) => {
		setEducation((prevEducation) => ({
			...prevEducation,
			[fieldName]: value,
		}));
	};
	console.log(education);
	return (
		<Box fontStyle={{ marginTop: "4%" }}>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMore />}
					aria-label="Expand"
					aria-controls="-content"
					id="-header">
					<Typography variant="h5">Education</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Stack spacing={6}>
						{requiredInfo.map((item, index) =>
							item.multiLine === true ? (
								<TextField
									key={index}
									id="outlined-basic"
									label={item.label}
									variant="outlined"
									multiline
									minRows={4}
								/>
							) : (
								<TextField
									key={index}
									id="outlined-basic"
									label={item.label}
									variant="outlined"
								/>
							)
						)}
					</Stack>
				</AccordionDetails>
			</Accordion>
		</Box>
	);
};

export default Education;
