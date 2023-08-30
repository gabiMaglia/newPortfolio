import React from "react";
import "./proyect-card.css";
import CarouselProyects from "../Common/Carousel/Carousel";

const ProyectCard = (props) => {
  const { titulo, descripcion, tecnologias, externalLink, githubRepo, foto, tipo } = props;
 
  return (
    <div className="proyect-card">
      <div className="img-cont">
        <CarouselProyects fotos={foto} className="img-cont" />
      </div>

      <h2>{titulo}</h2>

      <div className="description-tech">
        <p className="description">
          {descripcion}
        </p>
        <p className="tech">{tecnologias}</p>
      </div>

      <div className="button-links">
        <button className="btn btn-outline-dark btn-floating">
          <a href={githubRepo}>
            <i className="fa-brands fa-github"></i>
          </a>
        </button>
        <button className="btn btn-outline-dark btn-floating">
          <a href={externalLink}>
            <i className="fa-sharp fa-solid fa-square-arrow-up-right"></i>
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProyectCard;
