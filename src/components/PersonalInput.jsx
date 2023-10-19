import { useState } from "react";
import ExpandField from "./ExpandField";
import Submit from "./Submit";

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

const PersonalInput = ({ pushStatesUp }) => {
	const [personalInput, setPersonalInput] = useState({
		firstName: null,
		lastName: null,
		dateOfBirth: null,
		gender: null,
		phoneNumber: null,
		emailAddress: null,
		linkedIn: null,
		aboutMe: null,
	});

	const handleChange = (fieldName, value) => {
		setPersonalInput((prevPersonalInput) => ({
			...prevPersonalInput,
			[fieldName]: value,
		}));
	};

	const sendUp = () => {
		pushStatesUp(personalInput, "personalInput");
	};

	return (
		<>
			<ExpandField
				title={"Personal Details"}
				requiredInfo={requiredInfo}
				handleChange={handleChange}
			/>
			<Submit sendUp={sendUp} />
		</>
	);
};

export default PersonalInput;
