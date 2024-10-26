import { useState } from "react";
import parse from "html-react-parser";
import { Grid, GridItem, HStack, Image } from "@chakra-ui/react";
import "./PythonAbout.css";
import pythonLogo from "/public/img/python_logo.png";
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
    <Grid templateRows="8% 92%" className="pyAboutContainer">
      <GridItem rowSpan={1} className="pyAboutHeader">
        <HStack className="pyAboutLogo">
          <Image boxSize={7} src={pythonLogo} />
        </HStack>
        <p className="pyAboutTab">Christian_DerManuelian.py</p>
        <div className="pyAboutHeaderFiller"></div>
      </GridItem>
      <GridItem rowStart={2} margin={0} className="pyAboutBody">
        <HStack
          alignItems="flex-start"
          gap={2}
          marginRight={20}
          marginBottom={8}
          marginTop={5}
        >
          <LineNumbers
            lines={rawText.split("\n").length}
            classPrefix={"pyAbout"}
          />
          <pre className="pyAboutCodeContainer">{parse(rawText)}</pre>
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default PythonAbout;
