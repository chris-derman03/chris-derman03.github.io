import { Flex } from "@chakra-ui/react";
import Links from "./Links";

const Footer = () => {
  return (
    <Flex
      className="footer"
      width={"100%"}
      justifyContent={"space-around"}
      alignItems={"center"}
    >
      <Links />
      <h1 style={{ color: "white" }}>©2024 Christian DerManuelian</h1>
    </Flex>
  );
};

export default Footer;
