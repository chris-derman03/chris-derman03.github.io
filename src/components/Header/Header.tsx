import PythonAbout from "./PythonAbout";

interface Props {
  id: string;
}

const Header = ({ id }: Props) => {
  return (
    <div className="pageHeader" id={id}>
      <PythonAbout />
    </div>
  );
};

export default Header;
