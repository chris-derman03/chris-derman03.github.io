import "./BodySections.css";

const LineNumbers = () => {
  return (
    <ol className="lineNumbers" style={{ listStyleType: "none" }}>
      {Array.from({ length: 140 }, (_, index) => (
        <li key={index} className="lineNumber">
          {index + 1}
        </li>
      ))}
    </ol>
  );
};

export default LineNumbers;
