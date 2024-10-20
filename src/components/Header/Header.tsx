import { Flex, Image } from "@chakra-ui/react";
import meImage from "/public/img/geisel.png";
import PythonAbout from "./PythonAbout";

const Header = () => {
  return (
    <div>
      <Flex className="pageHeader" gap={100}>
        <Image
          className="headerImage"
          alt="Christian"
          src={meImage}
          borderRadius="full"
          boxSize="300px"
          objectFit="cover"
        ></Image>
        <PythonAbout />
      </Flex>
    </div>
  );
};

export default Header;
