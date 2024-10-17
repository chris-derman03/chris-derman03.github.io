import { useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import "./JSONCode.css";

/* 
Given a string representation of .json file line in the form "key: string",
split it into the key part and the value part

LOGIC:
    * Loop through text, once we count 2 quotes, if any character is a colon, return a split on that index
    (This is so we can split on colons without splitting on colons in the object key name)
*/
const jsonKeyValueTextSplit = (line: string) => {
  let numQuotes = 0;
  let significantColonIndex = 0;

  for (let i = 0; i < line.length; i++) {
    if (line[i] === '"') numQuotes += 1;
    if (numQuotes === 2 && line[i] === ":") {
      significantColonIndex = i;
      break;
    }
  }

  return [
    line.slice(0, significantColonIndex),
    line.slice(significantColonIndex + 1),
  ];
};

/*
Given a string representation as an arary, return a jsx render of it with proper styling

LOGIC:
    * Remove array brackets and optional following comma from string
        * Split that by "," to get the raw array elements
    * Render the opening bracket
    * Render each element with a comma after it, expect for the last element
        *  Elements have objectValue class, commas have jsonCode class    
    * Render closing bracket
    * Render a comma after the array if it existed
*/
const renderAsList = (arrayText: string) => {
  if (!arrayText.trim().startsWith("[")) return null;

  const arrayElements = arrayText
    .trim()
    .replace(/,$/, "") // remove ending comma
    .replace(/^\[|\]$/g, "") // remove leading and trailing brackets
    .split(",");

  return (
    <span>
      <span className="jsonCode">{" ["}</span>
      {arrayElements.map((element, index) => (
        // Array values one by one with styles seperating commas
        <span key={"element_" + index}>
          <span className="objectValue">{element}</span>
          <span>
            {index !== arrayElements.length - 1 ? (
              <span className="jsonCode">,</span>
            ) : null}
          </span>
        </span>
      ))}
      <span className="jsonCode">{"]"}</span>
      {arrayText.endsWith(",") ? <span className="jsonCode">{","}</span> : null}
    </span>
  );
};

/*
INPUT:
    valueText: string representation of an object string value
    
OUPUT: 
    jsx render of valueText with proper styling

LOGIC:
    * If there is a comma after the string, remove it from valueText
    * Render valueText with the objectValue class
    * Then render a comma if there was one with the jsonCode class
*/
const renderAsValue = (valueText: string) => {
  if (!valueText.startsWith('"')) return null;

  const endingComma = valueText.endsWith(",") ? "," : "";
  if (endingComma) valueText = valueText.slice(0, -1);

  return (
    <span>
      <span className="objectValue"> {valueText}</span>
      <span className="jsonCode">{endingComma}</span>
    </span>
  );
};

/* 
Given a trimmed raw text line for a json file, render it in jsx with coding styles

LOGIC:
    * Split the line on the proper : (colon) character
    * If the line is just an open or closed bracket, render that as is
    * Otherwise, we have a "key: value" line
        * Render the key, which can only be a string, followed by a colon 
        * Then render the value by the following cases
              * Render the text as an array, if its not a valid array the function will return null
              * Rebder the text as a string value, if its not a valid string, the function will return null
*/
const styleRawTextLine = (line: string) => {
  if (line === "") return null;
  const split = jsonKeyValueTextSplit(line);
  const keyText = split[0].trim();
  const valueText = split[1].trim();

  return (
    <span style={{ display: "inline" }}>
      {line === "{" ? (
        <span className="jsonCode">{line}</span>
      ) : line[0] === "}" ? (
        <span className="jsonCode">{line}</span>
      ) : (
        // If the line is "key: value"
        <HStack spacing={0} alignItems={"flex-start"}>
          <span className="objectKey">{keyText}</span>
          <span className="jsonCode">
            :{valueText.trim() === "{" ? " {" : ""}
          </span>
          {renderAsList(valueText)}
          {renderAsValue(valueText)}
        </HStack>
      )}
    </span>
  );
};

interface Props {
  jsonText: string;
}

const JSONCode = ({ jsonText }: Props) => {
  const [rawText, setRawText] = useState("");

  fetch(jsonText)
    .then((r) => r.text())
    .then((text) => {
      setRawText(text);
    });

  return (
    <div>
      {rawText.split("\n").map((line: string, index) => (
        <Box
          key={"line_" + index}
          className="jsonLine"
          marginLeft={line.split(/\S/)[0].length * 2}
        >
          {styleRawTextLine(line.trim())}
          <br></br>
        </Box>
      ))}
    </div>
  );
};

export default JSONCode;
