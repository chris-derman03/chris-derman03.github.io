import { Flex } from "@chakra-ui/react";
import ProjectNode, { Project } from "./ProjectNode";

interface Props {
  projectsData: { projects: Project[] };
}

const ProjectsFlex = ({ projectsData }: Props) => {
  const projects = projectsData.projects;

  return (
    <Flex className="projectFlex hidden hiddenRight hiddenDelayed">
      {projects.map((project, index) => (
        <ProjectNode key={"project_" + index} project={project} idx={index} />
      ))}
    </Flex>
  );
};

export default ProjectsFlex;
