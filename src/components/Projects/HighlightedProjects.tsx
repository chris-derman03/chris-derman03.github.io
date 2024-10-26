import { Flex } from "@chakra-ui/react";
import ProjectNode, { Project } from "./ProjectNode";

interface Props {
  projectsData: { projects: Project[] };
}

const HighlightedProjects = ({ projectsData }: Props) => {
  const projects = projectsData.projects;

  return (
    <Flex className="projectList" gap={10}>
      {projects.map((project, index) => (
        <ProjectNode key={"project_" + index} project={project} />
      ))}
    </Flex>
  );
};

export default HighlightedProjects;
