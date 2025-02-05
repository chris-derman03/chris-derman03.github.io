import { Flex } from "@chakra-ui/react";
import background_loop from "/public/videos/background_loop.mp4";
import Header from "./components/Header/Header";
import MyStory from "./components/MyStory/MyStory";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import NavBar from "./components/Nav/NavBar";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";

function App() {
  // Start all body section horizontal scrolls in the center
  useEffect(() => {
    function updateScroll() {
      const parent = document
        .getElementById("BodySection_Career")
        ?.querySelector(".bodySectionContent") as HTMLElement;
      const child = document.querySelector(".timeline");

      if (child && parent) {
        if (child.clientWidth <= parent.clientWidth) {
          // Child fits inside parent, use flexbox centering
          parent.scrollLeft = 0;
          parent.style.justifyContent = "center";
        } else {
          // Child overflows, center it via scroll position
          parent.scrollLeft = (parent.scrollWidth - parent.clientWidth) / 2;
          parent.style.justifyContent = "start";
        }
      }
    }

    updateScroll();
    // Run on page load and whenever the window resizes
    window.addEventListener("load", updateScroll);
    window.addEventListener("resize", updateScroll);
  }, []);

  // For scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <video autoPlay muted playsInline loop id="bg-video">
        <source src={background_loop} type="video/mp4" />
      </video>
      <div className="pageContainer">
        <NavBar />
        <Flex className="content">
          <Header id="BodySection_About" />
          <Projects id="BodySection_Code" />
          <Experience id="BodySection_Career" />
          <Skills id="BodySection_Skills" />
          <MyStory id="BodySection_Story" />
          <Footer />
        </Flex>
      </div>
    </>
  );
}

export default App;
