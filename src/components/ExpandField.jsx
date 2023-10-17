import {
	TextField,
	Typography,
	Stack,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const ExpandField = ({ title, requiredInfo, handleChange }) => {
	return (
		<Accordion>
			<AccordionSummary
				expandIcon={<ExpandMore />}
				aria-label="Expand"
				aria-controls="-content"
				id="-header">
				<Typography variant="h5">{title}</Typography>
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
								onChange={(e) =>
									handleChange(item.state, e.target.value)
								}
							/>
						) : (
							<TextField
								key={index}
								id="outlined-basic"
								label={item.label}
								variant="outlined"
								onChange={(e) =>
									handleChange(item.state, e.target.value)
								}
							/>
						)
					)}
				</Stack>
			</AccordionDetails>
		</Accordion>
	);
};

export default ExpandField;
