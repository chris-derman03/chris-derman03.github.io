import { Flex } from "@chakra-ui/react";

interface Props {
  id: string;
  headerText: string;
  children: React.ReactNode;
}

const BodySection = ({ id, headerText, children }: Props) => {
  return (
    <Flex className="bodySection" id={id}>
      <div className="bodySectionHeader">
        <h2 className="bodySectionHeaderTitle">{headerText}</h2>
      </div>
      {children}
    </Flex>
  );
};

export default BodySection;
