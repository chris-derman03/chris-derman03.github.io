import { Flex } from "@chakra-ui/react";
import ExperienceTree from "./ExperienceTimeline";
import ExperienceTimeline from "../../data/ExperienceTimeline.json";

const Experience = () => {
  return (
    <Flex className="bodySection" id="experience">
      <div className="bodySectionHeader">
        <h2 className="experienceHeader">Experience</h2>
      </div>
      <ExperienceTree timelineData={ExperienceTimeline}></ExperienceTree>
    </Flex>
  );
};

export default Experience;
