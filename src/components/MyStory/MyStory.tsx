import { useEffect, useRef, useState } from "react";
import { Box, Flex, Grid, GridItem, HStack } from "@chakra-ui/react";
import "../BodySections.css";
import "./MyStory.css";
import story from "../../data/story.json";
import JSONCode from "./JSONCode";
import LineNumbers from "../LineNumbers";

const MyStory = () => {
  const codeBodyRef = useRef<HTMLDivElement | null>(null);
  const [codeBodyHeight, setCodeBodyHeight] = useState(0);

  const updateHeight = () => {
    if (codeBodyRef.current) {
      const height = codeBodyRef.current.getBoundingClientRect().height + 30;
      setCodeBodyHeight(height);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      updateHeight(); // Set initial height after timeout
    }, 10);

    window.addEventListener("resize", updateHeight); // Update height on resize

    return () => {
      clearTimeout(timeoutId); // Cleanup timeout
      window.removeEventListener("resize", updateHeight); // Cleanup resize event
    };
  }, []);

  return (
    <div className="bodySection" id="myStory">
      <Grid templateColumns="90% 10%" templateRows="40px 1fr">
        <GridItem rowStart={1} colSpan={2} id="myStoryTitle">
          <Flex width="100%" height="100%" alignItems={"center"}>
            <div>
              <span className="jsonLogo">{"{i} "}</span>MyStory.json
            </div>
          </Flex>
        </GridItem>
        <GridItem
          rowStart={2}
          colStart={1}
          className="bodySectionBody"
          height={codeBodyHeight}
        >
          <HStack alignItems={"flex-start"}>
            <Box>
              <LineNumbers lines={200} />
            </Box>
            <div ref={codeBodyRef}>
              <JSONCode object={story}></JSONCode>
            </div>
          </HStack>
        </GridItem>
      </Grid>
    </div>
  );
};

export default MyStory;
