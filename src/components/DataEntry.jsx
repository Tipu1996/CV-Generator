import PersonalInput from "./PersonalInput";
import Education from "./Education";
import Experience from "./Experience";

const DataEntry = ({ pushStatesUp }) => {
	return (
		<>
			<PersonalInput pushStatesUp={pushStatesUp} />
			<Experience pushStatesUp={pushStatesUp} />
			<Education pushStatesUp={pushStatesUp} />
		</>
	);
};

export default DataEntry;
