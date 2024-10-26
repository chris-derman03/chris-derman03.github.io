import { Flex } from "@chakra-ui/react";

export interface Project {
  title: string;
  link: string;
  description: string;
  skill_set: string[];
  date: string;
}

interface Props {
  project: Project;
}

const ProjectNode = ({ project }: Props) => {
  return (
    <Flex className="projectNode" gap={2}>
      <h3>
        <a className="textLink projectLink" href={project.link} target="_blank">
          {project.title}
        </a>
      </h3>
      <h4>{project.description}</h4>
      <h6>{project.date}</h6>
    </Flex>
  );
};

export default ProjectNode;
