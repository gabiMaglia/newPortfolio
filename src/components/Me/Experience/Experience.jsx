import "./experience.css";

const Experience = () => {
  return (
    <div className="backgorund ">
      <section
        id="exp-stu-data"
        className="container bg-white  g-0 pt-4"
      >
        <article>
          <h2>Studies</h2>
        </article>

        <article>
          <h2>Experience</h2>
          <div className="exp-cont text-black">
            <h3 className="exp-title">Municipalidad de Granadero baigorria</h3>
            <h4 className="exp-activity">Area Manager</h4>
            <date className='exp-date'>Aplil-2017 to Present Day</date>
            <p className="exp-description">Responsible for the maintenance and operation(servers, network antenas adn cameras) of the surveillance Center of Granadero Baigorri city</p>
          </div>
        </article>

      </section>
    </div>
  );
};

export default Experience;
