import { Button, Flex } from "@chakra-ui/react";

const handleClick = () => {};

const NavBar = () => {
  return (
    <Flex id="nav">
      <Flex flexDir={"column"} id="scrollNav">
        <Button onClick={handleClick}>1</Button>
        <Button onClick={handleClick}>2</Button>
        <Button onClick={handleClick}>3</Button>
      </Flex>
    </Flex>
  );
};

export default NavBar;
