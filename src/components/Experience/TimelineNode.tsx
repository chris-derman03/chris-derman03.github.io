import { Flex, Image } from "@chakra-ui/react";
import TimelinePoint from "./TimelinePoint";

export interface TimelinePointData {
  company: string;
  title: string;
  start: string;
  range: string;
  cover: string;
  link: string;
  category: string;
}

interface Props {
  nodeData?: TimelinePointData;
}

const TimelineNode = ({ nodeData }: Props) => {
  const imagePath = nodeData?.cover;

  return (
    <Flex className="timelineNode">
      <Flex className="timelineNodePanel timelineNodeDescription">
        <Flex className="timelineNodeText">
          <h5>{nodeData?.title}</h5>
          <p className="h7">{nodeData?.company}</p>
          <h4>{nodeData?.range}</h4>
        </Flex>
        <Image src={imagePath} className="timelineNodeImage" boxSize="100%" />
      </Flex>
      <TimelinePoint category={nodeData?.category} />
      <Flex className="timelineNodePanel">
        <p className="h7">{nodeData?.start}</p>
      </Flex>
    </Flex>
  );
};

export default TimelineNode;
