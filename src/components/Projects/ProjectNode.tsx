import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
} from "@chakra-ui/react";
import SkillsIconList from "../SkillsIconList";

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
    <Flex className="projectNode">
      <Image
        className="projectNodeImage"
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
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

    // <Flex className="projectNode" gap={2}>
    //   <h3 className="projectLink">
    //     <a className="textLink" href={project.link} target="_blank">
    //       {project.title}
    //     </a>
    //   </h3>

    //
    //
    //
    // </Flex>
  );
};

export default ProjectNode;
