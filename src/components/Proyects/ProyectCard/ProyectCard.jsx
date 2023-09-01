import React from "react";
import styles from "./proyectCard.module.css";
import CarouselProyects from "../Common/Carousel/Carousel";

const ProyectCard = (props) => {
  const { titulo, descripcion, tecnologias, externalLink, githubRepo, foto } = props;

  return (
    <div className={styles.proyectCard}>
      <div className={styles.imgCont}>
        <CarouselProyects fotos={foto} className={styles.imgCont} />
      </div>

      <h2>{titulo}</h2>

      <div className={styles.descriptionTech}>
        <p className={styles.description}>
          {descripcion}
        </p>
        <p className={styles.tech}>{tecnologias}</p>
      </div>

      <div className={styles.buttonLinks}>
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
