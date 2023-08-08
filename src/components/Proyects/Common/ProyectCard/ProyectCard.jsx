import React from "react";
import "./proyect-card.css";
import CarouselProyects from "../Carousel/Carousel";

const ProyectCard = () => {
  return (
    <div className="proyect-card">
      <div className="img-cont">
       <CarouselProyects className="img-cont"/>
      </div>
     
      <h2>Gimnasio Craneo</h2>

      <div className="description-tech">
        <p className="description">
          This landing-page is entirely developed in ReactJS, it back-ends is
          developed in ExpressJS and Handlebars. Back-end can store students and
          their entire schedule of activities, the list of trainers and how many
          students are in each class.
        </p>
        <p className="tech">ReactJS/ExpressJS</p>
      </div>

      <div className="button-links">
        <button className="btn btn-outline-dark btn-floating">
          <a href="">
            <i className="fa-brands fa-github"></i>
          </a>
        </button>
        <button className="btn btn-outline-dark btn-floating">
          <a href="">
            <i className="fa-sharp fa-solid fa-square-arrow-up-right"></i>
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProyectCard;
