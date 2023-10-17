import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Experience from "./Experience";

const DataEntry = ({
	personalInfo,
	setPersonalInfo,
	experience,
	setExperience,
	addExperience,
	education,
	setEducation,
	addEducation,
}) => {
	return (
		<>
			<PersonalInfo
				personalInfo={personalInfo}
				setPersonalInfo={setPersonalInfo}
			/>
			<Experience
				experience={experience}
				setExperience={setExperience}
				addExperience={addExperience}
			/>
			<Education
				education={education}
				setEducation={setEducation}
				addEducation={addEducation}
			/>
		</>
	);
};

export default DataEntry;
