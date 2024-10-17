import { useState } from "react";
import parse from "html-react-parser";
import { Grid, GridItem, HStack } from "@chakra-ui/react";
import "./PythonAbout.css";
import pyAbout from "../../data/pyAbout.txt";
import LineNumbers from "../LineNumbers";

const PythonAbout = () => {
  const [rawText, setRawText] = useState("");

  fetch(pyAbout)
    .then((r) => r.text())
    .then((text) => {
      setRawText(text);
    });

  return (
    <Grid templateRows="5% 95%" rowGap={3} id="pyAboutContainer">
      <GridItem rowSpan={1}>poop</GridItem>
      <GridItem rowStart={2}>
        <HStack alignItems="flex-start">
          <LineNumbers lines={rawText.split("\n").length} />
          <pre className="pyCodeContainer">{parse(rawText)}</pre>
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default PythonAbout;
