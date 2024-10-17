import "./BodySections.css";

interface Props {
  lines: number;
}

const LineNumbers = ({ lines }: Props) => {
  return (
    <ol className="lineNumbersContainer" style={{ listStyleType: "none" }}>
      {Array.from({ length: lines }, (_, index) => (
        <li key={index} className="lineNumber">
          {index + 1}
        </li>
      ))}
    </ol>
  );
};

export default LineNumbers;
