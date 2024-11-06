import { Flex } from "@chakra-ui/react";
import background_loop from "/public/videos/background_loop.mp4";
import Header from "./components/Header/Header";
import MyStory from "./components/MyStory/MyStory";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import NavBar from "./components/Nav/NavBar";

function App() {
  return (
    <>
      <video autoPlay muted loop id="bg-video">
        <source src={background_loop} type="video/mp4" />
      </video>
      <div className="pageContainer">
        <NavBar />
        <Flex className="content" flexDir="column">
          <Header id="About" />
          <Experience id="Experience" />
          <Projects id="Projects" />
          <Skills id="Skills" />
          <MyStory id="Story" />
          <div className="footer">footer</div>
        </Flex>
      </div>
    </>
  );
}

export default App;
