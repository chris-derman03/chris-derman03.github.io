import { Grid, GridItem, Show } from "@chakra-ui/react";
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
      <Grid
        templateColumns={{
          base: "5% 90% 5%",
          lg: "17.5% 65% 17.5%",
        }}
        templateRows="auto repeat(5, auto)"
        rowGap={1000}
      >
        <GridItem rowStart={1} colSpan={3}>
          <NavBar />
          <Header />
        </GridItem>
        <GridItem rowStart={2} colStart={2}>
          <Experience />
        </GridItem>
        <GridItem rowStart={3} colStart={2}>
          <Projects />
        </GridItem>
        <GridItem rowStart={4} colStart={2}>
          <Skills />
        </GridItem>
        <GridItem rowStart={5} colStart={2}>
          <MyStory />
        </GridItem>
        <Show above="lg">
          <GridItem rowStart={3} colStart={3}>
            Aside
          </GridItem>
        </Show>
        <Show above="lg">
          <GridItem rowStart={5} colStart={1}>
            Aside
          </GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
