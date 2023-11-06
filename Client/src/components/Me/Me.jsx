import "./me.css";
import { Routes, Route } from "react-router-dom";
import MiniNav from "../common/MiniNav/MiniNav";
import Personal from "./Personal/Personal";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import Studies from "./Studies/Studies";

const Me = () => {
  const sections = [
    { name: "Personal", link: "personal" },
    { name: "Skills", link: "skills" },
    { name: "Experience", link: "experience" },
    { name: "Studies", link: "studies" },
  ];

  return (
    <>
      <header className="row g-0">
        <MiniNav sec={sections} />
      </header>
     <div div className="mainCont">
       
        <Routes>
          <Route path="personal" element={<Personal />} />
          <Route path="skills" element={<Skills />} />
          <Route path="experience" element={<Experience />} />
          <Route path="studies" element={<Studies />} />
        </Routes>
     </div>

    </>
  );
};

export default Me;
