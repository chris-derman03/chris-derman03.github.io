import { Flex } from "@chakra-ui/react";
import NavImages from "./NavImages";
import { useEffect } from "react";
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
  const content = document.getElementsByClassName("content")[0];
  const isScrolled = content.scrollTop > 300;
  const isMobile = window.innerWidth < 1240;

  if (section) {
    body.scrollTo({
      top:
        (section.offsetTop -
          120 -
          200 * Number(!isScrolled) * Number(isMobile)) *
        Number(sectionId !== "About"),
      behavior: "smooth",
    });
  }
};

const NavBar = () => {
  useEffect(() => {
    const content = document.getElementsByClassName("content")[0];
    const root = document.documentElement;

    const handleScroll = () => {
      const topContents = document.getElementsByClassName("topContent");
      const isScrolled = content.scrollTop > 300;
      const isMobile = window.innerWidth < 1240;

      for (let i = 0; i < topContents.length; i++) {
        if (isScrolled) {
          topContents[i].classList.add("navHidden");
        } else {
          topContents[i].classList.remove("navHidden");
        }
      }

      // Update CSS variable for spacing dynamically
      if (isMobile) {
        root.style.setProperty(
          "--nav-mobile-spacing",
          isScrolled ? "3px" : "20px"
        );
      }
    };

    content.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => content.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Flex className="nav">
      <NavImages className="topContent navHiddable" />
      <Flex className="navAbout topContent navHiddable">
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
