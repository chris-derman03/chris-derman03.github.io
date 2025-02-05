import { Flex, Image } from "@chakra-ui/react";
import SkillsIconList from "../SkillsIconList";

export interface Project {
  title: string;
  link: string;
  description: string;
  skill_set: string[];
  date: string;
  image: string;
}

interface Props {
  project: Project;
  idx: number;
}

const ProjectNode = ({ project, idx }: Props) => {
  return (
    <Flex className="projectNode" id={"projectNode" + idx}>
      <Image
        className="projectNodeImage"
        src={project.image}
        alt={project.title}
      />
      <a
        href={project.link}
        target="_blank"
        className="projectNodeBody projectLink"
      >
        <Flex className="projectNodeBodyFlex">
          <h5>{project.title}</h5>
          <SkillsIconList skills={project.skill_set} />
          <h4>{project.date}</h4>
          <h6>{project.description}</h6>
        </Flex>
      </a>
    </Flex>
  );
};

export default ProjectNode;
