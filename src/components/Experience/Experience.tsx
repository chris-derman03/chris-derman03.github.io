import ExperienceTimeline from "./ExperienceTimeline";
import ExperienceTimelineData from "../../data/experience_timeline.json";
import BodySection from "../BodySection";

interface Props {
  id: string;
}

const Experience = ({ id }: Props) => {
  return (
    <BodySection
      id={id}
      headerText="🧑‍💻 Experience 💼"
      children={<ExperienceTimeline timelineData={ExperienceTimelineData} />}
      hiddenDirection=""
    />
  );
};

export default Experience;
