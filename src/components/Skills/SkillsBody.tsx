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
        <Flex
            flexDir={"column"}
            gap={24}
            margin={10}
            className="hidden hiddenRight hiddenDelayed"
        >
            {Object.entries(skillset).map(([category, skills]) => (
                <Flex
                    key={category}
                    flexDir={"column"}
                    gap={8}
                    alignItems={"center"}
                >
                    <div className="skillSectionTitleContainer">
                        <h3 className="skillSectionTitle">{category}</h3>
                    </div>

                    <SkillsIconList
                        skills={skills}
                        size={50}
                        justify="center"
                    />
                </Flex>
            ))}
        </Flex>
    );
};

export default SkillsBody;
