import "./personal.css";
import profilePic from "../../../assets/fotoPerfil.jpeg";

const Personal = () => {
  return (
    <div className="center">
      <section id="personal-data" className="container-xl">
        <div className="photo-div col-lg ">
          <img className="photo" src={profilePic} alt="Gabriel Maglia" />
        </div>

        <article className="data-div col-lg">
          <div className="main-data-div">
            <div className="name">
              <h1>
                <strong>Gabriel Maglia</strong>
              </h1>
              <h2>Full-Stack developer</h2>
            </div>
            <div className="contact">
              <div className="d-flex gap-3 p-1">
                <i className="fa-solid fa-envelope p-1"></i>{" "}
                <p>gab.maglia@gmail.com</p>
              </div>
              <div className="d-flex gap-3 p-1">
                <i className="fa-solid fa-phone p-1"></i>
                <p>+54 9 341 720 7863</p>
              </div>
            </div>
          </div>

          <div className="about">
            <h3>About me</h3>
            <p>
              Self-motivated <strong>developer</strong>, who is willing to learn
              and create outstanding UI applications.
            </p>
          </div>

          <div className="hobbies">
            <h3>Hobbies</h3>
            <p className="list">
              <li>
                <i className="fa-solid fa-dumbbell"></i>
                <p>
                  <strong>Fitness</strong>
                </p>
              </li>
              <li>
                <i className="fa-solid fa-music"></i>
                <p>
                  <strong>Music</strong>
                </p>
              </li>
              <li>
                <i className="fa-solid fa-gamepad"></i>
                <p>
                  <strong>Gaming</strong>
                </p>
              </li>
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Personal;
