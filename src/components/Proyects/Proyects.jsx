import "./proyects.module.css";

import MiniNav from "../common/MiniNav/MiniNav";

import SearchBar from "../common/SearchBar/SearchBar";
import ProyectContainer from "./ProyectContainer/ProyectContainer";
import { useState } from "react";

const proyects = [
  {
    titulo: "Gimnasio Craneo",
    descripcion:
      "This landing-page is entirely developed in ReactJS, it back-ends is developed in ExpressJS and Handlebars. Back-end can store students and their entire schedule of activities, the list of trainers and how many students are in each class.",
    tecnologias: "ReactJS/ExpressJS",
    externalLink: "",
    foto: ["/assets/jobs/front-end-craneo/craneo1.png"],
    tipo: 'jobs'
  },
  {
    titulo: "personal",
    descripcion:
      "This landing-page is entirely developed in ReactJS, it back-ends is developed in ExpressJS and Handlebars. Back-end can store students and their entire schedule of activities, the list of trainers and how many students are in each class.",
    tecnologias: "ReactJS/ExpressJS",
    externalLink: "",
    foto: ["../../../../assets/jobs/front-end-craneo/craneo1.png", "../../../../assets/jobs/front-end-craneo/craneo2.png", "../../../../assets/jobs/front-end-craneo/craneo3.png"],
    tipo: 'personal_proyects'
  },
  {
    titulo: "responsive",
    descripcion:
      "This landing-page is entirely developed in ReactJS, it back-ends is developed in ExpressJS and Handlebars. Back-end can store students and their entire schedule of activities, the list of trainers and how many students are in each class.",
    tecnologias: "ReactJS/ExpressJS",
    externalLink: "",
    githubRepo: "",
    foto: ["../../../../assets/jobs/front-end-craneo/craneo1.png", "../../../../assets/jobs/front-end-craneo/craneo2.png", "../../../../assets/jobs/front-end-craneo/craneo3.png"],
    tipo: 'responsive_html'
  },
];
const buttons = [
  { name: "All", category: "all" },
  { name: "Jobs", category: "jobs" },
  { name: "Personal Proyects", category: "personal_proyects" },
  { name: "Responsive HTML & CSS", category: "responsive_html" },
];

const Proyects = () => {

  const [jobsList, setJobsList] = useState(proyects)

  const handleSort = (e) => {
    const category = e.target.attributes.category.value
    if (category === "all") { setJobsList(proyects) } else {

      let sortedList = proyects.filter(element => element.tipo === category)
      setJobsList(sortedList)
    }
  }

  const handleSearch = (searchTerm) => {
    // Lógica de búsqueda
    console.log("Realizando búsqueda:", searchTerm);
  };

  const searchBarComponent = <SearchBar onSearch={handleSearch} />;
  return (
    <>
      <header className="row  g-0">
        <MiniNav handleSort={handleSort} buttons={buttons} searchBar={searchBarComponent} />
      </header>

      <ProyectContainer proyects={jobsList} />

    </>
  );
};

export default Proyects;
