import { Flex, Image } from "@chakra-ui/react";

export interface TimelinePointItem {
  company: string;
  title: string;
  range: string[];
  cover: string;
  link: string;
}

interface Props {
  nodeData: TimelinePointItem;
  imagePath: string;
}

const TreeNode = ({ nodeData, imagePath }: Props) => {
  return (
    <Flex className="timelinePointNode">
      <a href={nodeData.link} target="_blank" className="timelinePointNodeLink">
        <Image
          src={imagePath}
          alt={nodeData.company + " logo"}
          className="timelinePointNodeImage"
        ></Image>
      </a>
      <h3>{nodeData.company}</h3>
      <h4>{nodeData.title}</h4>
    </Flex>
  );
};

export default TreeNode;
