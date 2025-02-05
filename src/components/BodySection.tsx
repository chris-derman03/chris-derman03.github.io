import { Grid, GridItem } from "@chakra-ui/react";

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
    <Grid
      className={"bodySection hidden " + hiddenDirection}
      templateRows="40px 1fr"
      id={id}
    >
      <GridItem rowStart={1} className="bodySectionHeader">
        <h2 className="bodySectionHeaderTitle">{headerText}</h2>
      </GridItem>
      <GridItem
        rowStart={2}
        className={"bodySectionContent hidden " + hiddenDirection}
      >
        {sectionContent}
      </GridItem>
    </Grid>

    // <div className={"bodySection hidden " + hiddenDirection} id={id}>
    //   <div className="bodySectionHeader">
    //     <h2 className="bodySectionHeaderTitle">{headerText}</h2>
    //   </div>
    //   <div className="bodySectionContent">{sectionContent}</div>
    // </div>
  );
};

export default BodySection;
