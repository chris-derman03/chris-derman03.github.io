import { Flex } from "@chakra-ui/react";
import ExperienceTree from "./ExperienceTree";
import ExperienceTimeline from "../../data/ExperienceTimeline.json";

const Experience = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      className="bodySection"
    >
      <h2>Experience Header</h2>
      <ExperienceTree timelineData={ExperienceTimeline}></ExperienceTree>
    </Flex>
  );
};

export default Experience;
