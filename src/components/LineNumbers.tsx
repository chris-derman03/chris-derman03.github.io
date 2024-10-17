import { ListItem, OrderedList } from "@chakra-ui/react";

interface Props {
  lines: number;
  classPrefix: string;
}

const LineNumbers = ({ lines, classPrefix }: Props) => {
  return (
    <OrderedList
      className={classPrefix + "LineNumbersContainer"}
      style={{ listStyleType: "none", textAlign: "right" }}
      p={0}
      paddingTop={0.4}
      m={0}
    >
      {Array.from({ length: lines }, (_, index) => (
        <ListItem key={index} className={classPrefix + "LineNumber"}>
          {index + 1}
        </ListItem>
      ))}
    </OrderedList>
  );
};

export default LineNumbers;
