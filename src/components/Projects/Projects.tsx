import { Flex } from "@chakra-ui/react";
import HighlightedProjects from "./HighlightedProjects";
import ProjectData from "../../data/projects.json";

const Projects = () => {
  return (
    <Flex className="bodySection" id="projects">
      <div className="bodySectionHeader">
        <h2 className="bodySectionHeaderTitle">Projects</h2>
      </div>
      <HighlightedProjects projectsData={ProjectData} />
    </Flex>
  );
};

export default Projects;
