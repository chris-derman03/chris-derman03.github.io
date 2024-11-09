import { Flex, HStack } from "@chakra-ui/react";
import SkillsIconList from "../SkillsIconList";

export interface Project {
  title: string;
  link: string;
  description: string;
  skill_set: string[];
  date: string;
}

interface Props {
  project: Project;
  idx: number;
}

const ProjectNode = ({ project, idx }: Props) => {
  return (
    <Flex className="projectNode" gap={2}>
      <HStack gap={5}>
        <h3 className="projectLink">
          <a className="textLink" href={project.link} target="_blank">
            {project.title}
          </a>
        </h3>
        {idx === 0 ? (
          <HStack gap={0} className="fade">
            <div className="customTooltipArrow"></div>
            <div className="customTooltip">Click Me!!!!!</div>
          </HStack>
        ) : null}
      </HStack>
      <SkillsIconList skills={project.skill_set} />
      <h4>{project.description}</h4>
      <h6>{project.date}</h6>
    </Flex>
  );
};

export default ProjectNode;
