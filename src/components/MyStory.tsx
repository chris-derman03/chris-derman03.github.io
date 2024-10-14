import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Box, Flex, Grid, GridItem, HStack } from "@chakra-ui/react";
import "./BodySections.css";
import story from "../data/story.json";
import JSONCode from "./JSONCode";
import LineNumbers from "./LineNumbers";

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
    }, 0); // 0 ms timeout to allow the DOM to finish rendering

    window.addEventListener("resize", updateHeight); // Update height on resize

    return () => {
      clearTimeout(timeoutId); // Cleanup timeout
      window.removeEventListener("resize", updateHeight); // Cleanup resize event
    };
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="bodySection" id="myStory">
      <Grid templateColumns="97% 3%" templateRows="40px 1fr">
        <GridItem rowStart={1} colSpan={2} id="jsonTitle">
          <Flex width="100%" height="100%" alignItems={"center"}>
            <div>
              <span className="jsonLogo">{"{i} "}</span>MyStory.json
            </div>
          </Flex>
        </GridItem>
        <GridItem rowStart={2} colStart={1} className="bodySectionBody">
          <HStack alignItems={"flex-start"}>
            <Box height={codeBodyHeight} className="listNumbersContainer">
              <LineNumbers />
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
