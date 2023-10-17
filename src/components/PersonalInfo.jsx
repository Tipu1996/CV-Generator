import {
	TextField,
	Typography,
	Stack,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const requiredInfo = [
	{
		state: "firstName",
		label: "First Name",
		multiLine: false,
	},
	{
		state: "lastName",
		label: "Last Name",
		multiLine: false,
	},
	{
		state: "dateOfBirth",
		label: "Date of Birth",
		multiLine: false,
	},
	{
		state: "gender",
		label: "Gender",
		multiLine: false,
	},
	{
		state: "phoneNumber",
		label: "Phone Number",
		multiLine: false,
	},
	{
		state: "emailAddress",
		label: "Email Address",
		multiLine: false,
	},
	{
		state: "linkedIn",
		label: "LinkedIn",
		multiLine: false,
	},
	{
		state: "aboutMe",
		label: "About Me",
		multiLine: true,
	},
];

const PersonalInfo = () => {
	return (
		<>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMore />}
					aria-label="Expand"
					aria-controls="-content"
					id="-header">
					<Typography variant="h5">Personal Details</Typography>
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
		</>
	);
};

export default PersonalInfo;
