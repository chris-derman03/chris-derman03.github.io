import { Flex } from "@chakra-ui/react";
import SkillsIconList from "../SkillsIconList";

interface IconGroups {
  [key: string]: string[];
}

interface Props {
  skillset: IconGroups;
}

const SkillsBody = ({ skillset }: Props) => {
  return (
    <Flex flexDir={"column"} gap={24} margin={10}>
      {Object.entries(skillset).map(([category, skills]) => (
        <Flex key={category} flexDir={"column"} gap={6}>
          <h3>{category}</h3>
          <SkillsIconList skills={skills} size={50} />
        </Flex>
      ))}
    </Flex>
  );
};

export default SkillsBody;
