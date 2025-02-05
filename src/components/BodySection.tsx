import { Flex } from "@chakra-ui/react";

interface Props {
  id: string;
  headerText: string;
  sectionContent: React.ReactNode;
}

interface Props {
  hiddenDirection: string;
}

const BodySection = ({
  id,
  headerText,
  sectionContent,
  hiddenDirection,
}: Props) => {
  return (
    <Flex className={"bodySection hidden " + hiddenDirection} id={id}>
      <div className="bodySectionHeader">
        <h2 className="bodySectionHeaderTitle">{headerText}</h2>
      </div>
      {sectionContent}
    </Flex>
  );
};

export default BodySection;
