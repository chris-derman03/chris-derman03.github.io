import { Flex } from "@chakra-ui/react";
import ExperienceTimeline from "./ExperienceTimeline";
import ExperienceTimelineData from "../../data/experience_timeline.json";

const Experience = () => {
  return (
    <Flex className="bodySection" id="experience">
      <div className="bodySectionHeader">
        <h2 className="bodySectionHeaderTitle">Experience</h2>
      </div>
      <ExperienceTimeline
        timelineData={ExperienceTimelineData}
      ></ExperienceTimeline>
    </Flex>
  );
};

export default Experience;
