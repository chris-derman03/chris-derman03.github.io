import { FaStar, FaSchool, FaBriefcase } from "react-icons/fa6";

interface Props {
  category: string | undefined;
}

const TimelinePoint = ({ category }: Props) => {
  let color;
  category == "start"
    ? (color = "rgb(0, 255, 0)")
    : category == "education"
    ? (color = "rgb(0,100,255)")
    : category == "job"
    ? (color = "rgb(255,100,0)")
    : (color = "none");

  return (
    <div className="timelinePoint" style={{ backgroundColor: color }}>
      {category == "start" ? (
        <FaStar color="white" size={25} />
      ) : category == "education" ? (
        <FaSchool color="white" size={25} />
      ) : category == "job" ? (
        <FaBriefcase color="white" size={25} />
      ) : null}
    </div>
  );
};

export default TimelinePoint;
