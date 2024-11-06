import { Flex } from "@chakra-ui/react";
const scrollSections = ["About", "Experience", "Projects", "Skills", "Story"];

const handleClick = (sectionId: string): void => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
    });
  }
};

const NavBar = () => {
  return (
    <Flex className="nav">
      <Flex flexDir={"column"} className="scrollPoints" gap={0}>
        {scrollSections.map((section) => (
          <button
            className="navButton"
            key={section + "_navButton"}
            onClick={() => handleClick(section)}
          >
            {<h2>{section}</h2>}
          </button>
        ))}
      </Flex>
    </Flex>
  );
};

export default NavBar;
