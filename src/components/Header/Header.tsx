import { HStack, Image } from "@chakra-ui/react";
import meImage from "/public/img/geisel.png";
import PythonAbout from "./PythonAbout";

const Header = () => {
  return (
    <div>
      <HStack spacing={100}>
        <Image
          className="headerImage"
          alt="Christian"
          src={meImage}
          borderRadius="full"
          boxSize="300px"
          objectFit="cover"
        ></Image>
        <PythonAbout />
      </HStack>
    </div>
  );
};

export default Header;
