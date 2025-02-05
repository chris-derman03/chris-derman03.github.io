import BodySection from "../BodySection";
import SkillsBody from "./SkillsBody";
import skillset from "../../data/skillset.json";

interface Props {
  id: string;
}

export const Skills = ({ id }: Props) => {
  return (
    <BodySection
      id={id}
      headerText="⚙️ Skills 🛠️"
      sectionContent={<SkillsBody skillset={skillset} />}
      hiddenDirection="hiddenRight"
    />
  );
};
