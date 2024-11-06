import BodySection from "../BodySection";
import SkillsBody from "./SkillsBody";
import skillset from "../../data/skillset.json";

export const Skills = () => {
  return (
    <BodySection
      id="skills"
      headerText="Skills"
      children={<SkillsBody skillset={skillset} />}
    />
  );
};
