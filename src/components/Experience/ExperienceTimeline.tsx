import { Flex } from "@chakra-ui/react";
import TreeNode, { TimelinePoint } from "./TimelineNode";

interface Props {
  timelineData: { timeline: TimelinePoint[] };
}

const ExperienceTree = ({ timelineData }: Props) => {
  const timeline = timelineData.timeline;

  return (
    <Flex className="timeline">
      {timeline.map((timelinePoint, index) => (
        <div key={"nodeAndPath_" + index}>
          {index !== timeline.length - 1 && <TreeNode divider={true} />}
          <TreeNode nodeData={timelinePoint} />
        </div>
      ))}
    </Flex>
  );
};

export default ExperienceTree;
