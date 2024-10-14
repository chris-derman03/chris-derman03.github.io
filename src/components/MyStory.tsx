import { Grid } from "@chakra-ui/react";
import story from "../data/story.json";
import JSONCode from "./JSONCode";

const MyStory = () => {
  return (
    <div className="bodySection" id="myStory">
      {/* <Grid
        templateColumns="17.5% 65% 17.5%"
        templateRows="auto repeat(5, auto)"
      >

      </Grid> */}
      <JSONCode object={story}></JSONCode>
      {/* <p>{parse(story.content)}</p> */}
    </div>
  );
};

export default MyStory;
