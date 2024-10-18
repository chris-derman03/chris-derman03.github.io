import { Flex, Image } from "@chakra-ui/react";

interface TimelinePointItem {
  company: string;
  title: string;
  range: string[];
  cover: string;
  link: string;
}

export interface TimelinePoint {
  timelinePointItems: TimelinePointItem[];
}

interface Props {
  timelinePoint: TimelinePoint;
}

const ExperienceTreeNode = ({ timelinePoint }: Props) => {
  const imagePaths = timelinePoint.timelinePointItems.map((data) => data.cover);

  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      {timelinePoint.timelinePointItems.map((data, index) => (
        <Flex className="timelinePointItem" key={"timelineItem_" + index}>
          <a href={data.link} target="_blank" className="timelinePointItemLink">
            <Image
              src={imagePaths[index]}
              alt={data.company + " logo"}
              className="timelinePointItemImage"
            ></Image>
          </a>
          <h3>{data.company}</h3>
          <h4>{data.title}</h4>
        </Flex>
      ))}
    </Flex>
  );
};

export default ExperienceTreeNode;
