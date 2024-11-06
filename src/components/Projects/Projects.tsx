import HighlightedProjects from "./HighlightedProjects";
import ProjectData from "../../data/projects.json";
import BodySection from "../BodySection";

interface Props {
  id: string;
}

const Projects = ({ id }: Props) => {
  return (
    <BodySection
      id={id}
      headerText="Projects"
      children={<HighlightedProjects projectsData={ProjectData} />}
    />
  );
};

export default Projects;
