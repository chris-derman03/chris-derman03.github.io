import { Flex } from "@chakra-ui/react";
import PythonAbout from "./PythonAbout";

import HeaderImages from "./HeaderImages";

interface Props {
  id: string;
}

const Header = ({ id }: Props) => {
  return (
    <Flex className="pageHeader" gap={100} id={id}>
      <HeaderImages />
      <PythonAbout />
    </Flex>
  );
};

export default Header;
