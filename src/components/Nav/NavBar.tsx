import { Flex } from "@chakra-ui/react";
import NavImages from "./NavImages";
const scrollSections = ["About", "Code", "Career", "Skills", "Story"];

const scrollEmojis: { [key: string]: string } = {
  About: "📖",
  Career: "💼",
  Code: "💻",
  Skills: "🛠️",
  Story: "📜",
};

const handleClick = (sectionId: string): void => {
  const body = document.getElementsByClassName("content")[0];
  const section = document.getElementById("BodySection_" + sectionId);
  if (section) {
    body.scrollTo({
      top: (section.offsetTop - 100) * Number(sectionId !== "About"),
      behavior: "smooth",
    });
  }
};

const NavBar = () => {
  return (
    <Flex className="nav">
      <NavImages />
      <Flex className="navAbout">
        <h1>Christian DerManuelian</h1>
        <h6>Data Scientist</h6>
        <h6>Machine Learning Engineer</h6>
      </Flex>
      <Flex className="navSection">
        {scrollSections.map((section) => (
          <button
            className="navButton"
            key={section + "_navButton"}
            onClick={() => handleClick(section)}
          >
            <h2>{section}</h2>
            <h2>{scrollEmojis[section]}</h2>
          </button>
        ))}
      </Flex>
    </Flex>
  );
};

export default NavBar;
