import { Box, Flex, HStack, Image } from "@chakra-ui/react";

export interface TimelinePoint {
  company: string;
  title: string;
  start: string;
  range: string;
  cover: string;
  link: string;
}

interface Props {
  divider?: boolean;
  nodeData?: TimelinePoint;
}

const TreeNode = ({ divider, nodeData }: Props) => {
  if (divider) {
    return (
      <HStack className="timelineNode" gap={5}>
        <h5 className="timelineNodeYear"></h5>
        <Box className="timelineDividerContainer">
          <Box className="timelineDivider" />
        </Box>
      </HStack>
    );
  }

  const imagePath = nodeData?.cover;

  return (
    <HStack className="timelineNode" gap={5}>
      <h5 className="timelineNodeYear">{nodeData?.start}</h5>
      <a href={nodeData?.link} target="_blank" className="timelineNodeLink">
        <Image
          src={imagePath}
          alt={nodeData?.company + " logo"}
          className="timelineNodeImage"
        ></Image>
      </a>
      <Flex className="timelineNodeDescription">
        <h3>{nodeData?.title}</h3>
        <h4>{nodeData?.company + " (" + nodeData?.range + ")"}</h4>
      </Flex>
    </HStack>
  );
};

export default TreeNode;
