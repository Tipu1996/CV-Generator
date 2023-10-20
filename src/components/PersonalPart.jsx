import { Box, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const PersonalPart = ({ personalInput }) => {
	// const [personalInput, setPersonalInput] = useState({
	// 	firstName: "Tipu",
	// 	lastName: "Majak",
	// 	dateOfBirth: "31/03/1986",
	// 	gender: "Male",
	// 	phoneNumber: "0449561242",
	// 	emailAddress: "ifsang.hasfa@gmail.com",
	// 	linkedIn: "linkedin.com/9721ngodn",
	// 	aboutMe:
	// 		"lorem ipsum sectum lorem ipsum sectum lorem ipsum sectum lorem ipsum sectum lorem ipsum sectum lorem ipsum sectum lorem ipsum sectum lorem ipsum sectum lorem ipsum sectum lorem ipsum sectum lorem ipsum sectum lorem ipsum sectum lorem ipsum sectum",
	// });
	return (
		<Box>
			<Typography
				variant="h5"
				style={{
					paddingTop: "5%",
					paddingBottom: "3%",
					fontWeight: "bold",
				}}>
				{personalInput.firstName} {personalInput.lastName}
			</Typography>
			<Divider
				sx={{
					backgroundColor: (theme) => theme.palette.secondary.main,
					height: 4,
				}}
			/>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-evenly",
					paddingTop: "3%",
					paddingBottom: "1%",
					flexWrap: "wrap",
				}}>
				<Typography variant="body1" style={{ fontWeight: "bold" }}>
					Date of Birth:
				</Typography>
				<Typography variant="body1">
					{personalInput.dateOfBirth}
				</Typography>
				<Typography
					variant="body1"
					style={{ fontWeight: "bold", paddingLeft: "3%" }}>
					Gender:
				</Typography>
				<Typography variant="body1">{personalInput.gender}</Typography>
				<Typography
					variant="body1"
					style={{ fontWeight: "bold", paddingLeft: "3%" }}>
					Email Address:
				</Typography>
				<Typography variant="body1">
					{personalInput.emailAddress}
				</Typography>
				<Typography
					variant="body1"
					style={{ fontWeight: "bold", paddingLeft: "3%" }}>
					Phone Number:
				</Typography>
				<Typography variant="body1">
					{personalInput.phoneNumber}
				</Typography>
				<Typography
					variant="body1"
					style={{ fontWeight: "bold", paddingLeft: "3%" }}>
					LinkedIn:
				</Typography>
				<Typography variant="body1">
					{personalInput.linkedIn}
				</Typography>
			</Box>
			<Box
				sx={{
					paddingTop: "3%",
				}}>
				<Typography variant="body1" style={{ fontWeight: "bold" }}>
					About Me:
				</Typography>
				<Typography variant="body1">{personalInput.aboutMe}</Typography>
			</Box>
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

export default PersonalPart;
