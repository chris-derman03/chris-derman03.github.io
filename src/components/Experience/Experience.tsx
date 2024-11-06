import ExperienceTimeline from "./ExperienceTimeline";
import ExperienceTimelineData from "../../data/experience_timeline.json";
import BodySection from "../BodySection";

const Experience = () => {
  return (
    <BodySection
      id="experience"
      headerText="Experience"
      children={
        <ExperienceTimeline
          timelineData={ExperienceTimelineData}
        ></ExperienceTimeline>
      }
    />
  );
};

export default Experience;
