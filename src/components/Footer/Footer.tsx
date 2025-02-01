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
      <h2 style={{ color: "white" }}>©2024 Christian DerManuelian</h2>
    </Flex>
  );
};

export default Footer;
