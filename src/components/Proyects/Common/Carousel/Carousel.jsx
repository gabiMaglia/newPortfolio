import React from "react";

const CarouselProyects = ({ fotos }) => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {fotos.map((e, key) => {
            return (
              <div  key={key} className="carousel-item active">
                <img
                  src={e}
                  className="d-block carusel-image w-100"
                  alt="carouselPic"
                />
              </div>
            );
          })}
        </div>
   {   fotos.length > 1 &&  <span>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </span>}
      </div>
    </div>
  );
};

export default CarouselProyects;
