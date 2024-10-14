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

const parseObject = (
  object: Record<string, string | string[] | JSONValue>,
  depth: number = 1
) => {
  const keys = Object.keys(object);
  return (
    <>
      <span className="jsonCode">{"{"}</span>
      {keys.map((key, index) => (
        <div
          key={key}
          className="dynamic-indent"
          style={
            {
              "--dynamic-margin": `${20 * depth + 20}px`,
            } as React.CSSProperties
          }
        >
          <span className="objectKey">"{key}"</span>
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
        </div>
      ))}
      <span className="jsonCode">{"}"}</span>
    </>
  );
};

const JSONCode = ({ object }: Props) => {
  return <>{parseObject(object)}</>;
};

export default JSONCode;
