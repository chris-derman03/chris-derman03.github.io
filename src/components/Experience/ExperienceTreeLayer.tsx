import { Flex, Image } from "@chakra-ui/react";
import TreeNode, { TimelinePointItem } from "./TreeNode";

export interface TimelinePoint {
  timelinePointItems: TimelinePointItem[];
}

interface Props {
  timelinePoint: TimelinePoint;
}

const ExperienceTreeLayer = ({ timelinePoint }: Props) => {
  const imagePaths = timelinePoint.timelinePointItems.map((data) => data.cover);

  return (
    <Flex
      className="treeLayer"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {timelinePoint.timelinePointItems.map((data, index) => (
        <TreeNode
          key={"timelineNode_" + index}
          nodeData={data}
          imagePath={imagePaths[index]}
        ></TreeNode>
      ))}
    </Flex>
  );
};

export default ExperienceTreeLayer;
