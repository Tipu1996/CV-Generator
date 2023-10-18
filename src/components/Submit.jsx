import { Button } from "@mui/material";
import { Box } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

const Submit = ({ sendUp }) => {
	return (
		<Box fontStyle={{ marginTop: "4%" }}>
			<Button
				variant="contained"
				onClick={() => {
					sendUp();
				}}>
				<DoneIcon />
			</Button>
		</Box>
	);
};
export default Submit;
