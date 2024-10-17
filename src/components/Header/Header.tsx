import { HStack, Image } from "@chakra-ui/react";
// import meImage from "../../assets/img/dublin.png";
import meImage from "../../assets/img/geisel.png";
import PythonAbout from "./PythonAbout";

const Header = () => {
  return (
    <div>
      <HStack spacing={100}>
        <Image
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
