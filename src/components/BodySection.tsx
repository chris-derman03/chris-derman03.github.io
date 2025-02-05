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
    <div className={"bodySection hidden " + hiddenDirection} id={id}>
      <div className="bodySectionHeader">
        <h2 className="bodySectionHeaderTitle">{headerText}</h2>
      </div>
      <div className={"bodySectionContent " + id + "_Content"}>
        {sectionContent}
      </div>
    </div>
  );
};

export default BodySection;
