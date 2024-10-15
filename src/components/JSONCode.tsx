import { Fragment, useState } from "react";
import "./JSONCode.css";
import { Box, HStack } from "@chakra-ui/react";

/* 
Split a raw text line into tthe key part and the value part

* Loop through text, once we count 2 quotes, if any character is a colon, return a split on that index
* This is so we can split on colons without splitting on colons in the object key name
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
Given a trimmed raw text line for a json file, render it in an html <p> tag with coding styles.

* Split the line on : (colon) characters
* Inside a <p> tag with no following newline
    * If the line is a { or }, return that by itself
    * Otherwise, make a new <p> similar to the one above
        * Assume this is a valid string representing a .json file line
        * Use the split (key string and value string) and format the json line
*/
const styleRawTextLine = (line: string) => {
  const split = jsonKeyValueTextSplit(line);
  console.log("===============");
  console.log(line);
  console.log(split);
  console.log("===============");

  return (
    <p style={{ display: "inline" }}>
      {line === "{" ? (
        <span className="jsonCode">{line}</span>
      ) : line[0] === "}" ? (
        <span className="jsonCode">{line}</span>
      ) : (
        <p style={{ display: "inline" }}>
          {split[1].trim()[0] === "[" ? (
            <>
              <span className="objectKey">{split[0]}</span>
              <span className="jsonCode">:</span>
              {split[1][split[1].length - 1] === "," ? (
                <>
                  <span className="objectValue">
                    {split[1].substring(0, split[1].length - 1)}
                  </span>
                  <span className="jsonCode">,</span>
                </>
              ) : (
                <span className="objectValue">{split[1]}</span>
              )}
            </>
          ) : split[1].trim()[0] === "{" ? (
            <>
              <span className="objectKey">{split[0]}</span>
              <span className="jsonCode">:{split[1]}</span>
            </>
          ) : split[1].trim()[0] === '"' ? (
            <>
              <span className="objectKey">{split[0]}</span>
              <span className="jsonCode">:</span>
              {split[1][split[1].length - 1] === "," ? (
                <>
                  <span className="objectValue">
                    {split[1].substring(0, split[1].length - 1)}
                  </span>
                  <span className="jsonCode">,</span>
                </>
              ) : (
                <span className="objectValue">{split[1]}</span>
              )}
            </>
          ) : null}
        </p>
      )}
    </p>
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
        <Fragment key={index}>
          {
            <Box
              className="jsonLine"
              marginLeft={line.split(/\S/)[0].length * 2}
            >
              {styleRawTextLine(line.trim())}
              <br></br>
            </Box>
          }
        </Fragment>
      ))}
    </div>
  );
};

export default JSONCode;
