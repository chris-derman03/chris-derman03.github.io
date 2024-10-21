import { Flex } from "@chakra-ui/react";
import PythonAbout from "./PythonAbout";

import HeaderImages from "./HeaderImages";

const Header = () => {
  return (
    <Flex className="pageHeader" gap={100}>
      <HeaderImages />
      <PythonAbout />
    </Flex>
  );
};

export default Header;
