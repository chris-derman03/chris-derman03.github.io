import { Flex } from "@chakra-ui/react";
import Links from "./Links";

const Footer = () => {
  return (
    <Flex className="footer">
      <Links />
      <h2 style={{ color: "white" }}>©2024 Christian DerManuelian</h2>
    </Flex>
  );
};

export default Footer;
