import "./proyects.module.css";

import MiniNav from "../common/MiniNav/MiniNav";

import SearchBar from "../common/SearchBar/SearchBar";
import ProyectContainer from "./ProyectContainer/ProyectContainer";

const proyects = [
  {
    titulo: "Gimnasio Craneo",
    descripcion:
      "This landing-page is entirely developed in ReactJS, it back-ends is developed in ExpressJS and Handlebars. Back-end can store students and their entire schedule of activities, the list of trainers and how many students are in each class.",
    tecnologias: "ReactJS/ExpressJS",
    externalLink: "",
    foto: ["../../../../../../assets/jobs/front-end-craneo/craneo1.png"],
    tipo:'Job'
  },
  // {
  //   titulo: "Gimnasio Craneo",
  //   descripcion:
  //     "This landing-page is entirely developed in ReactJS, it back-ends is developed in ExpressJS and Handlebars. Back-end can store students and their entire schedule of activities, the list of trainers and how many students are in each class.",
  //   tecnologias: "ReactJS/ExpressJS",
  //   externalLink: "",
  //   foto: ["../../../../assets/jobs/front-end-craneo/craneo1.png","../../../../assets/jobs/front-end-craneo/craneo2.png","../../../../assets/jobs/front-end-craneo/craneo3.png"],
  //   tipo:'Job'
  // },
  // {
  //   titulo: "Gimnasio Craneo",
  //   descripcion:
  //     "This landing-page is entirely developed in ReactJS, it back-ends is developed in ExpressJS and Handlebars. Back-end can store students and their entire schedule of activities, the list of trainers and how many students are in each class.",
  //   tecnologias: "ReactJS/ExpressJS",
  //   externalLink: "",
  //   githubRepo: "",
  //   foto: ["../../../../assets/jobs/front-end-craneo/craneo1.png","../../../../assets/jobs/front-end-craneo/craneo2.png","../../../../assets/jobs/front-end-craneo/craneo3.png"],
  //   tipo:'Job'
  // },
];

const Proyects = () => {
  const buttons = [
    { name: "All" },
    { name: "Jobs" },
    { name: "Personal Proyects" },
    { name: "Responsive HTML & CSS" },
  ];

  const handleSearch = (searchTerm) => {
    // Lógica de búsqueda
    console.log("Realizando búsqueda:", searchTerm);
  };

  const searchBarComponent = <SearchBar onSearch={handleSearch} />;
  return (
    <>
      <header className="row  g-0">
        <MiniNav buttons={buttons} searchBar={searchBarComponent} />
      </header>
      <ProyectContainer proyects={proyects} />


    



    </>
  );
};

export default Proyects;
