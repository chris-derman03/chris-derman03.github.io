import background_loop from "./assets/videos/background_loop.mp4";
import { Grid, GridItem } from "@chakra-ui/react";
import MyStory from "./components/MyStory";

function App() {
  return (
    <>
      <video autoPlay muted loop id="bg-video">
        <source src={background_loop} type="video/mp4" />
      </video>
      <Grid
        templateColumns="17.5% 65% 17.5%"
        templateRows="auto repeat(5, auto)"
        gap={4}
      >
        <GridItem rowStart={1} colSpan={3} bg="rgb(0,0,0,0.8)">
          Heading
        </GridItem>
        <GridItem rowStart={2} colStart={2}>
          <MyStory />
        </GridItem>
        <GridItem rowStart={3} colStart={2} bg="rgb(0,0,100,0.8)">
          Body2
        </GridItem>
        <GridItem rowStart={4} colStart={2} bg="rgb(0,0,100,0.8)">
          Body3
        </GridItem>
        <GridItem rowStart={5} colStart={2} bg="rgb(0,0,100,0.8)">
          Body4
        </GridItem>
        <GridItem rowStart={3} colStart={3}>
          Aside
        </GridItem>
        <GridItem rowStart={5} colStart={1}>
          Aside
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
