import { Flex } from "@chakra-ui/react";
import ProjectNode, { Project } from "./ProjectNode";

interface Props {
  projectsData: { projects: Project[] };
}

const HighlightedProjects = ({ projectsData }: Props) => {
  const projects = projectsData.projects;

  return (
    <Flex
      className="projectList hidden hiddenLeft hiddenDelayed"
      gap={10}
      margin={10}
    >
      {projects.map((project, index) => (
        <ProjectNode key={"project_" + index} project={project} idx={index} />
      ))}
    </Flex>
  );
};

export default HighlightedProjects;
