import "./personal.css";
import profilePic from "../../../assets/fotoPerfil.jpeg";

const Personal = () => {
  const hobiesObj = {
    title: "Hobbies",
    hobbies: {
      Fitness: "fa-solid fa-dumbbell",
      Music: "fa-solid fa-music",
      Gaming: "fa-solid fa-gamepad",
    },
  };

  const persona = {
    nombre: "Gabriel",
    apellido: 'Maglia',
    title: 'Full-Stack developer',
    mail: 'gab.maglia@gmail.com',
    phone: '+54 9 341 720 7863',
    about : 'Self-motivated <strong style="font-size: 19px; font-weight:2 00"> developer </strong> who is willing to learn and create outstanding UI applications.',
    
  }
  return (
          
        <div className="center">
  
        <section id="personal-data" className=" g-0">
          <div className="photo-div col-lg">
            <img className="photo" src={profilePic} alt="Gabriel Maglia" />
          </div>
  
          <article className="data-div col-lg">
            <div className="about ">
              <h3><strong>About me</strong></h3>
              <p dangerouslySetInnerHTML={{ __html: persona.about }}>
  
              </p>
            </div>
  
            <div className="main-data-div">
              <div className="name">
                <h1>
                  <strong>Gabriel Maglia</strong>
                </h1>
                <h2>Full-Stack developer</h2>
              </div>
              <div className="personal-contact">
                <div className="d-flex gap-3 ">
                  <i className="fa-solid fa-envelope "></i>
                  <p>gab.maglia@gmail.com</p>
                </div>
                <div className="d-flex gap-3 ">
                  <i className="fa-solid fa-phone "></i>
                  <p>+54 9 341 720 7863</p>
                </div>
              </div>
            </div>
            <div className="hobbies">
              <h3><strong>{hobiesObj.title}</strong></h3>
              <div className="list">
                {Object.entries(hobiesObj.hobbies).map(([hobby, icon], i) => (
                  <li key={i}>
                    <i className={`fa-solid ${icon}`}></i>
                    <p>
                      {hobby}
                    </p>
                  </li>
                ))}
              </div>
            </div>
          </article>
        </section>
  
</div>
  );
};

export default Personal;
