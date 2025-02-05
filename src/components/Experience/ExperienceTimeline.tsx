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
        {/* Green star at the bottom */}
        <Flex className="timelineNode">
          <Flex className="timelineNodePanel timelineNodeDateReversed">
            <p className="h7">Jan 24, 2003</p>
          </Flex>
          <TimelinePoint category="start" />
          <Flex className="timelineNodePanel" />
        </Flex>

        {timeline.map((point, index) => (
          <TimelineNode nodeData={point} idx={index} />
        ))}
      </Flex>
    </Flex>
  );
};

export default ExperienceTree;
