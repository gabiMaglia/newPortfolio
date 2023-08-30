import "./proyects.module.css";

import MiniNav from "../common/MiniNav/MiniNav";

import SearchBar from "../common/SearchBar/SearchBar";
import ProyectContainer from "./ProyectContainer/ProyectContainer";

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
      <ProyectContainer />


      {/*      


      <Routes>
        <Route path="jobs" element={<Jobs />} />
        <Route path="personalproyects" element={<Personal_Proyects />} />
        <Route path="deviochallenge1" element={<Challenge1 />} />    
      </Routes> */}
    </>
  );
};

export default Proyects;
