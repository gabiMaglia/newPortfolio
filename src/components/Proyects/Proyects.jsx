import "./proyects.module.css";

import MiniNav from "../common/MiniNav/MiniNav";

import SearchBar from "../common/SearchBar/SearchBar";
import ProyectContainer from "./ProyectContainer/ProyectContainer";
import { useState } from "react";

const proyects = [
  {
    titulo: "Gimnasio Craneo",
    descripcion:
      "Gimnasio Craneo Landing-Page",
    tecnologias: "ReactJS",
    externalLink: "https://gimnasiocraneo.atlasair.tech",
    foto: ['https://res.cloudinary.com/atlasair/image/upload/v1684881336/CV/gimnasioCraneo/craneo3_frjgif.gif', 'https://res.cloudinary.com/atlasair/image/upload/v1684881336/CV/gimnasioCraneo/craneo2_zizi2g.gif',"https://res.cloudinary.com/atlasair/image/upload/v1684881336/CV/gimnasioCraneo/craneo1_l1eprn.gif"],
    tipo: 'jobs'
  },
  
  {
    titulo: "Error 404 Page",
    descripcion:
      "This an error 404 mock page",
    tecnologias: "HTML/CSS",
    externalLink: "http://devchallengeio404error.gabrielmaglia.me",
    githubRepo: "https://github.com/gabiMaglia/deChallengeIo1",
    foto: ['https://res.cloudinary.com/atlasair/image/upload/v1694717858/err404.png'],
    tipo: 'responsive_html'
  },
  {
    titulo: "My Team Page",
    descripcion:
      "Mock",
    tecnologias: "HTML/CSS",
    externalLink: "https://devchallengeio2.web.app",
    githubRepo: "https://github.com/gabiMaglia/devChallengeIo2",
    foto: ['https://res.cloudinary.com/atlasair/image/upload/v1694719112/myteampage_uwlsxj.png'],
    tipo: 'responsive_html'
  },
  {
    titulo: "Interior Consultan Challenge",
    descripcion:
      "Mock",
    tecnologias: "HTML/CSS",
    externalLink: "https://devchallengeio2.web.app",
    githubRepo: "https://github.com/gabiMaglia/devChallengeIo3",
    foto: ['https://res.cloudinary.com/atlasair/image/upload/v1694719503/interior_ctzfzi.png'],
    tipo: 'responsive_html'
  },
  {
    titulo: "Recipe Page",
    descripcion:
      "Mock",
    tecnologias: "HTML/CSS",
    externalLink: "https://devchallengeio3.web.app",
    githubRepo: "https://github.com/gabiMaglia/devChallengeIo4",
    foto: ['https://res.cloudinary.com/atlasair/image/upload/v1694719755/recipe_apbt9d.png'],
    tipo: 'responsive_html'
  },
  {
    titulo: "My Gallery",
    descripcion:
      "Mock",
    tecnologias: "HTML/CSS",
    externalLink: "https://devchallengeio5.web.app",
    githubRepo: "https://github.com/gabiMaglia/devChallengIo6",
    foto: ['https://res.cloudinary.com/atlasair/image/upload/v1694719880/socialMedia_doodfj.png'],
    tipo: 'responsive_html'
  },
  {
    titulo: "Checkout Page",
    descripcion:
      "Mock",
    tecnologias: "HTML/CSS/Javascript",
    externalLink: "https://devchallengeio6.web.app",
    githubRepo: "https://github.com/gabiMaglia/devChallengeIo5",
    foto: ['https://res.cloudinary.com/atlasair/image/upload/v1694720902/shoppingCart_bwuziy.png'],
    tipo: 'responsive_html'
  },
  {
    titulo: "Eddie HomePage",
    descripcion:
      "Mock",
    tecnologias: "HTML/CSS",
    externalLink: "https://devchallengeio7.web.app",
    githubRepo: "https://devchallengeio7.web.app",
    foto: ['https://res.cloudinary.com/atlasair/image/upload/v1694721205/eddies_xsm4r4.png'],
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

  const [searchBar, setSearchBar] = useState('')

  const handleSort = (e) => {
    const category = e.target.attributes.category.value
    if (category === "all") { setJobsList(proyects) } else {

      let sortedList = proyects.filter(element => element.tipo === category)
      setJobsList(sortedList)
    }
  }

  const handleSearch = (e) => {
    let input = e.target.value
    setSearchBar(input)
  };

  const searchBarComponent = <SearchBar onSearch={handleSearch} />;
  return (
    <section className="h-100">
      <header className="row  g-0">
        <MiniNav handleSort={handleSort} buttons={buttons} searchBar={searchBarComponent} />
      </header>

      <ProyectContainer proyects={jobsList} />

    </section>
  );
};

export default Proyects;
