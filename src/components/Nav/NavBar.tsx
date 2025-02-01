import { Flex } from "@chakra-ui/react";
import HeaderImages from "../Header/HeaderImages";
const scrollSections = ["About", "Projects", "Experience", "Skills", "Story"];

const scrollEmojis: { [key: string]: string } = {
  About: "📖",
  Experience: "💼",
  Projects: "💻",
  Skills: "🛠️",
  Story: "📜",
};

const handleClick = (sectionId: string): void => {
  const body = document.getElementsByClassName("content")[0];
  const section = document.getElementById(sectionId);
  if (section) {
    body.scrollTo({
      top: (section.offsetTop - 100) * Number(sectionId !== "About"),
      behavior: "smooth",
    });
  }
};

const NavBar = () => {
  return (
    <Flex className="nav" gap={10}>
      <HeaderImages />
      <Flex className="navSection" gap={0}>
        {scrollSections.map((section) => (
          <button
            className="navButton"
            key={section + "_navButton"}
            onClick={() => handleClick(section)}
          >
            {<h2>{section + " " + scrollEmojis[section]}</h2>}
          </button>
        ))}
      </Flex>
    </Flex>
  );
};

export default NavBar;
