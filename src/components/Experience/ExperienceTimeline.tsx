import { Flex } from "@chakra-ui/react";
import TimelineNode, { TimelinePointData } from "./TimelineNode";
import TimelinePoint from "./TimelinePoint";

interface Props {
  timelineData: { timeline: TimelinePointData[] };
}

const ExperienceTree = ({ timelineData }: Props) => {
  const timeline = timelineData.timeline;

  return (
    <Flex className="timeline">
      <div className="timelineBar" />
      <Flex className="timelineNodes">
        <TimelinePoint category="start" />
        {timeline.map((point) => (
          <TimelineNode nodeData={point} />
        ))}
      </Flex>
    </Flex>
  );
};

export default ExperienceTree;
