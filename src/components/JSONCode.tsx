import "./JSONCode.css";

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
              "--dynamic-margin": `${10 * depth + 10}px`,
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
                <span key={idx} className="objectValue">
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
          {index < keys.length - 1 && depth === 2 && <br />}
          <br />
        </div>
      ))}
      <span className="jsonCode">{"}"}</span>
    </>
  );
};

const JSONCode = ({ object }: Props) => {
  return <div>{parseObject(object)}</div>;
};

export default JSONCode;
