import { Flex, Tooltip } from "@chakra-ui/react";
import SkillsIconList from "./SkillsIconList";

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
      <h3>
        <Tooltip
          label="CLICK ME!!!"
          placement="right"
          hasArrow
          isOpen={idx === 0}
          offset={[0, 30]}
        >
          <a
            className="textLink projectLink"
            href={project.link}
            target="_blank"
          >
            {project.title}
          </a>
        </Tooltip>
      </h3>
      <SkillsIconList skills={project.skill_set} />
      <h4>{project.description}</h4>
      <h6>{project.date}</h6>
    </Flex>
  );
};

export default ProjectNode;
