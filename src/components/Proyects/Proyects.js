import MiniNav from "../common/MiniNav/MiniNav";
import "./proyects.css";

const Proyects = () => {
  const sections = [
    { name: "Angular", link: "https://a" },
    { name: "NodeJs", link: "https://a" },
    { name: "React", link: "https://a" },
    { name: "Responsive HTML & CSS", link: "https://a" },
  ];
  return (
    <>
      <header className="row  g-0">
        <MiniNav sec={sections} />
      </header>
    </>
  );
};

export default Proyects;
