import "./skills.css";

// import htmlLogo from "../../../assets/skills/HTML.png";
// import javascriptLogo from "../../../assets/skills/Javascript.png";
// import cssLogo from "../../../assets/skills/CSS.png";

const Skills = () => {
  const hardSkills = [

    {
      skill: "Javascript",
      img: "Javascript.png",
    },
    {
      skill: "HTML",
      img: "HTML.png",
    },
    {
      skill: "CSS",
      img: "CSS.png",
    },
  ];
  const softSkils = [
    {
      skill: "Creativity",
      img: "creativity.png",
    },
    {
      skill: "Critical Perspective",
      img: "critical-perspective.png",
    },
    {
      skill: "Flexibility",
      img: "flexibility.png",
    },
    {
      skill: "Growth Mindset",
      img: "GrowthMindset.png",
    },

  ];

  return (
   
    <section id="skills-data" className="container-fluid bg-white  g-0 pt-4">
        <article className="hardSkikll">

            
          <figure>
            <figcaption ><p className="hover-underline-animation-dark  text-black" >Soft Skills</p></figcaption>
            <div className="list-cont">
              {softSkils.map((obj, i) => {
                const loadImage = (imageName) =>
                  require(`../../../assets/skills/${imageName}`);
                return (
                  <div className="skill-cont bg-black  " key={i}>
                    <h2 className="hover-underline-animation-light">{obj.skill}</h2>
                    <img
                      className="skillsImg"
                      src={loadImage(obj.img)}
                      alt={obj.img}
                    />
                  </div>
                );
              })}
            </div>
          </figure>
        </article>

        <article className="softSkills">

        <figure>
            <figcaption><p className="hover-underline-animation-dark text-black">Languajes</p></figcaption>
            <div className='list-cont'>
            {hardSkills.map((obj, i) => {
              const loadImage = (imageName) =>
                require(`../../../assets/skills/${imageName}`);
              return (
                <div className="skill-cont bg-black" key={i}>
                  <h2 className="hover-underline-animation-light">{obj.skill}</h2>
                  <img
                    className="skillsImg"
                    src={loadImage(obj.img)}
                    alt={obj.img}
                  />
                </div>
              );
            })}
            </div>
        </figure>
        </article>
      </section>
    
  );
};

export default Skills;
