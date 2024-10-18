import { HStack } from "@chakra-ui/react";
import ExperienceTreeLayer from "./ExperienceTreeLayer";
import { TimelinePoint } from "./ExperienceTreeLayer";

interface Props {
  timelineData: { timeline: TimelinePoint[] };
}

const ExperienceTree = ({ timelineData }: Props) => {
  return (
    <HStack spacing={50}>
      {timelineData.timeline.map((timelinePoint, index) => (
        <ExperienceTreeLayer
          key={"timelinePoint_" + index}
          timelinePoint={timelinePoint}
        />
      ))}
    </HStack>
  );
};

export default ExperienceTree;
