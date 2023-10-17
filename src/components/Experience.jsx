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

const Experience = ({ experience, setExperience, addExperience }) => {
	const handleChange = (fieldName, value) => {
		setExperience((prevExperience) => ({
			...prevExperience,
			[fieldName]: value,
		}));
	};
	console.log(experience);
	return (
		<Box fontStyle={{ marginTop: "4%" }}>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMore />}
					aria-label="Expand"
					aria-controls="-content"
					id="-header">
					<Typography variant="h5">Work Experience</Typography>
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

export default Experience;
