import background_loop from "./assets/videos/background_loop.mp4";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import MyStory from "./components/MyStory/MyStory";

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
        rowGap={50}
      >
        <GridItem rowStart={1} colSpan={3} className="pageHeader">
          <Header />
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
