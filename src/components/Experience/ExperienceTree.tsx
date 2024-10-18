import { HStack } from "@chakra-ui/react";
import ExperienceTreeNode from "./ExperienceTreeNode";
import { TimelinePoint } from "./ExperienceTreeNode";

interface Props {
  timelineData: { timeline: TimelinePoint[] };
}

const ExperienceTree = ({ timelineData }: Props) => {
  return (
    <HStack spacing={50}>
      {timelineData.timeline.map((timelinePoint, index) => (
        <ExperienceTreeNode
          key={"timelinePoint_" + index}
          timelinePoint={timelinePoint}
        ></ExperienceTreeNode>
      ))}
    </HStack>
  );
};

export default ExperienceTree;
