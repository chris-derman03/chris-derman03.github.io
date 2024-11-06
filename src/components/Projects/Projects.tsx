import HighlightedProjects from "./HighlightedProjects";
import ProjectData from "../../data/projects.json";
import BodySection from "../BodySection";

const Projects = () => {
  return (
    <BodySection
      id="projects"
      headerText="Projects"
      children={<HighlightedProjects projectsData={ProjectData} />}
    />
  );
};

export default Projects;
