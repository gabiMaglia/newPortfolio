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
    {
      skill: "Perfectionist",
      img: "perfectionist.png",
    },
  ];

  return (
    <section className="d-flex  flex-wrap   m-3 mt-5 p-4 pt-5 main-sec">
      <div className="skillCenter">
        <article className="hardSkikll">
          {hardSkills.map((obj, i) => {
            const loadImage = (imageName) =>
              require(`../../../assets/skills/${imageName}`);
            return (
              <div className="skillcont " key={i}>
                <h2>{obj.skill}</h2>
                <img
                  className="skillsImg"
                  src={loadImage(obj.img)}
                  alt={obj.img}
                />
              </div>
            );
          })}
        </article>
        <article className="softSkills">
          {softSkils.map((obj, i) => {
            const loadImage = (imageName) =>
              require(`../../../assets/skills/${imageName}`);
            return (
              <div className="skillcont bg-black" key={i}>
                <h2>{obj.skill}</h2>
                <img
                  className="skillsImg"
                  src={loadImage(obj.img)}
                  alt={obj.img}
                />
              </div>
            );
          })}
        </article>
      </div>

      {/* <article className="hardSkikll">
        {hardSkills.map((obj, i) => {
          const loadImage = (imageName) =>
            require(`../../../assets/skills/${imageName}`);
          return (
            <div className="skillcont " key={i}>
              <h2>{obj.skill}</h2>
              <img
                className="skillsImg"
                src={loadImage(obj.img)}
                alt={obj.img}
              />
            </div>
          );
        })}
      </article>
      <article className="softSkills">
        {softSkils.map((obj, i) => {
          const loadImage = (imageName) =>
            require(`../../../assets/skills/${imageName}`);
          return (
            <div className="skillcont bg-black" key={i}>
              <h2>{obj.skill}</h2>
              <img
                className="skillsImg"
                src={loadImage(obj.img)}
                alt={obj.img}
              />
            </div>
          );
        })}
      </article> */}
    </section>
  );
};

export default Skills;
