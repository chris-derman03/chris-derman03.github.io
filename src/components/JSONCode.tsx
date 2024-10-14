import "./JSONCode.css";

// interface Props {
//   object: { [key: string]: string | };
// // }
// interface JSONValue {
//   [key: string]: string | JSONValue; // Keys can be strings, values can be strings or nested JSONValue objects
// }

// interface Props {
//   object: JSONValue; // Use JSONValue for the object prop
// }

interface JSONValue {
  [key: string]: string | string[] | JSONValue; // Represents valid JSON values
}

interface Props {
  object: Record<string, string | string[] | JSONValue>; // Define object as a record with string keys and JSONValue values
}

const putTabs = (level: number) => {
  return Array(level)
    .fill("\u00A0") // \u00A0 is the Unicode for &nbsp;
    .join("");
};

const parseObject = (
  object: Record<string, string | string[] | JSONValue>,
  depth: number = 1
) => {
  const keys = Object.keys(object);
  return (
    <>
      {"{"}
      {keys.map((key, index) => (
        <p key={key}>
          <span className="objectKey">
            {putTabs(depth * 4)}"{key}"
          </span>
          <span className="jsonCode">: </span>
          {typeof object[key] === "string" ? (
            <span className="objectValue"> "{object[key]}"</span>
          ) : Array.isArray(object[key]) ? (
            <span className="objectValue">
              {" "}
              <span className="jsonCode">[</span>
              {(object[key] as string[]).map((item, idx) => (
                <span key={idx}>
                  "{item}"
                  {idx < (object[key] as string[]).length - 1 ? (
                    <span className="jsonCode">, </span>
                  ) : (
                    ""
                  )}
                </span>
              ))}
              <span className="jsonCode">]</span>
            </span>
          ) : (
            parseObject(object[key], depth + 1)
          )}
          {index < keys.length - 1 && <span className="jsonCode">,</span>}
          <br />
        </p>
      ))}
      {putTabs((depth - 1) * 4)}
      {"}"}
    </>
  );
};

const JSONCode = ({ object }: Props) => {
  return <p className="jsonCode">{parseObject(object)}</p>;
};

export default JSONCode;
