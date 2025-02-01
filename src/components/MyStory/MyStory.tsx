import { useEffect, useRef, useState } from "react";
import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import { LuFileJson } from "react-icons/lu";
import story from "../../data/story.txt";

import JSONCode from "./JSONCode";
import LineNumbers from "../LineNumbers";

interface Props {
  id: string;
}

const MyStory = ({ id }: Props) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [codeBodyHeight, setCodeBodyHeight] = useState(0);

  useEffect(() => {
    if (divRef.current) {
      setCodeBodyHeight(divRef.current.getBoundingClientRect().height);
    }
  }, []);

  return (
    <div className="bodySection hidden hiddenRight" id={id}>
      <Grid templateColumns="90% 10%" templateRows="40px 1fr" rowGap={2}>
        <GridItem rowStart={1} colSpan={2} className="bodySectionHeader">
          <HStack
            padding={2}
            spacing={3}
            alignItems={"center"}
            height="100%"
            width="100%"
          >
            <LuFileJson className="fileLogo" />
            <h2>MyStory.json</h2>
          </HStack>
        </GridItem>
        <GridItem
          rowStart={2}
          colStart={1}
          className="bodySectionBody hidden hiddenRight hiddenDelayed"
        >
          <HStack alignItems={"flex-start"} flexDirection={"row-reverse"}>
            <div ref={divRef}>
              <JSONCode jsonText={story}></JSONCode>
            </div>
            <Box height={codeBodyHeight}>
              <LineNumbers lines={200} classPrefix="myStory" />
            </Box>
          </HStack>
        </GridItem>
      </Grid>
    </div>
  );
};

export default MyStory;
