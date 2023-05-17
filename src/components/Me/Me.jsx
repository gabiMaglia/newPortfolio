import "./me.css";
import MiniNav from "../common/MiniNav/MiniNav";
import { Routes, Route } from "react-router-dom";
import Personal from "./Personal/Personal";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import Github from "./Github/Github";

const Me = () => {
  const sections = [
    { name: "Personal", link: "personal" },
    { name: "Skills", link: "skills" },
    { name: "Experience", link: "experience" },
    { name: "Github", link: "github" },
  ];

  return (
    <>
      <header className="row g-0 mb-5">
        <MiniNav sec={sections} />
      </header>
      <Routes>
        <Route path="personal" element={<Personal />} />
        <Route path="skills" element={<Skills />} />
        <Route path="experience" element={<Experience />} />
        <Route path="github" element={<Github />} />
      </Routes>
    </>
  );
};

export default Me;
