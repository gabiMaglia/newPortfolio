import React from "react";
import { Link } from "react-router-dom";
import CarouselProyects from "../Common/Carousel/Carousel";
import styles from "./proyectCard.module.css";
const ProyectCard = (props) => {
  const { titulo, descripcion, tecnologias, externalLink, githubRepo, foto } =
    props;

  return (
    <div className={styles.proyectCard}>
      
      
      <h2 className={styles.title}>{titulo}</h2>
      
      <div className={styles.imgCont}>
        <CarouselProyects fotos={foto} className={styles.imgCont} />
      </div>


      <div className={styles.buttonLinks}>
        <Link target={"_blank"} to={githubRepo}>
          <button className="btn btn-outline-dark btn-floating">
            <i className="fa-brands fa-github"></i>
          </button>
        </Link>
        <Link target={"_blank"} to={externalLink}>
          <button className="btn btn-outline-dark btn-floating">
            <i className="fa-sharp fa-solid fa-square-arrow-up-right"></i>
          </button>
        </Link>
      </div>

      <div className={styles.descriptionTech}>
        <p className={styles.description}>{descripcion}</p>
        <p className={styles.tech}>{tecnologias}</p>
      </div>


    </div>
  );
};

export default ProyectCard;
