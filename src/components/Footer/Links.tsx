import { Flex } from "@chakra-ui/react";
import { ImLinkedin } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";

const Links = () => {
  return (
    <Flex gap={5} justifyContent={"center"}>
      <a
        href={"https://www.linkedin.com/in/christian-dermanuelian-366614270/"}
        target="_blank"
        className="footerLink"
      >
        <ImLinkedin size={50} />
      </a>
      <a
        href={"https://github.com/chris-derman03"}
        target="_blank"
        className="footerLink"
      >
        <FaGithubSquare size={55} />
      </a>
    </Flex>
  );
};

export default Links;
