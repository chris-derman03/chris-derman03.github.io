import ProjectsFlex from "./ProjectsFlex";
import ProjectData from "../../data/projects.json";
import BodySection from "../BodySection";

interface Props {
  id: string;
}

const Projects = ({ id }: Props) => {
  return (
    <BodySection
      id={id}
      headerText="💾 Projects 🖥️"
      sectionContent={<ProjectsFlex projectsData={ProjectData} />}
      hiddenDirection="hiddenRight"
    />
  );
};

export default Projects;
