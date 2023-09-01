import React from "react";
// import pic1 from "../../../../assets/jobs/front-end-craneo/craneo1.png";
// import pic2 from "../../../../assets/jobs/front-end-craneo/craneo2.png";
// import pic3 from "../../../../assets/jobs/front-end-craneo/craneo3.png";

const CarouselProyects = ({fotos}) => {
  const [pic1] = fotos
  
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            
            <img src={pic1} className="d-block carusel-image w-100" alt="..." />
          </div>
          {/* <div className="carousel-item">
            <img src={pic2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={pic3} className="d-block w-100" alt="..." />
          </div> */}
        </div>
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
      </div>
    </div>
  );
};

export default CarouselProyects;
