import "./proyects.css";
import {React, onSearch} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MiniNav from "../common/MiniNav/MiniNav";

import Personal_Proyects from "./PP/Personal_Proyects";
import Jobs from "./Jobs/Jobs";
import Challenge1 from "./Challenge1/Challenge1";
import SearchBar from "../common/SearchBar/SearchBar";


const Proyects = () => {
  
  const sections = [
 
    { name: "All", link: "all" },
    { name: "Jobs", link: "jobs" },
    { name: "Personal Proyects", link: "personalproyects" },
    { name: "Responsive HTML & CSS", link: "deviochallenge1"},
  ];

  const handleSearch = (searchTerm) => {
    // Lógica de búsqueda
    console.log('Realizando búsqueda:', searchTerm);
  };

  const searchBarComponent = <SearchBar onSearch={handleSearch} />
  return (
   
    <>
      <header className="row  g-0">
        <MiniNav sec={sections} searchBar = {searchBarComponent}  />
      </header>
     
      <Routes>
        <Route path="jobs" element={<Jobs />} />
        <Route path="personalproyects" element={<Personal_Proyects />} />
        <Route path="deviochallenge1" element={<Challenge1 />} />    
      </Routes>
    </>
   
  );
};

export default Proyects;
