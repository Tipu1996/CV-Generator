import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Experience from "./Experience";

const DataEntry = ({ pushStatesUp }) => {
	return (
		<>
			<PersonalInfo pushStatesUp={pushStatesUp} />
			<Experience pushStatesUp={pushStatesUp} />
			<Education pushStatesUp={pushStatesUp} />
		</>
	);
};

export default DataEntry;
