import { Flex } from "@chakra-ui/react";
import { FaGithubSquare, FaLinkedin, FaFileAlt } from "react-icons/fa";

const Links = () => {
  return (
    <Flex gap={5} justifyContent={"center"}>
      <a
        href={"https://www.linkedin.com/in/christian-dermanuelian-366614270/"}
        target="_blank"
        className="footerLink"
      >
        <FaLinkedin size={55} />
      </a>
      <a
        href={"https://github.com/chris-derman03"}
        target="_blank"
        className="footerLink"
      >
        <FaGithubSquare size={55} />
      </a>
      <a href={"/documents/Resume.pdf"} target="_blank" className="footerLink">
        <FaFileAlt size={50} />
      </a>
    </Flex>
  );
};

export default Links;
