import ProyectCard from "../ProyectCard/ProyectCard";
import "./proyectContainer.module.css";

const proyects = [
  {
    titulo: "Gimnasio Craneo",
    descripcion:
      "This landing-page is entirely developed in ReactJS, it back-ends is developed in ExpressJS and Handlebars. Back-end can store students and their entire schedule of activities, the list of trainers and how many students are in each class.",
    tecnologias: "ReactJS/ExpressJS",
    externalLink: "",
    foto: ["../../../../../../assets/jobs/front-end-craneo/craneo1.png"],
    tipo:'Job'
  },
  // {
  //   titulo: "Gimnasio Craneo",
  //   descripcion:
  //     "This landing-page is entirely developed in ReactJS, it back-ends is developed in ExpressJS and Handlebars. Back-end can store students and their entire schedule of activities, the list of trainers and how many students are in each class.",
  //   tecnologias: "ReactJS/ExpressJS",
  //   externalLink: "",
  //   foto: ["../../../../assets/jobs/front-end-craneo/craneo1.png","../../../../assets/jobs/front-end-craneo/craneo2.png","../../../../assets/jobs/front-end-craneo/craneo3.png"],
  //   tipo:'Job'
  // },
  // {
  //   titulo: "Gimnasio Craneo",
  //   descripcion:
  //     "This landing-page is entirely developed in ReactJS, it back-ends is developed in ExpressJS and Handlebars. Back-end can store students and their entire schedule of activities, the list of trainers and how many students are in each class.",
  //   tecnologias: "ReactJS/ExpressJS",
  //   externalLink: "",
  //   githubRepo: "",
  //   foto: ["../../../../assets/jobs/front-end-craneo/craneo1.png","../../../../assets/jobs/front-end-craneo/craneo2.png","../../../../assets/jobs/front-end-craneo/craneo3.png"],
  //   tipo:'Job'
  // },
];

const ProyectContainer = () => {
  return (
    <section>
      <ul>
        {proyects.map((item, key) => {
          return (
            <li key={key}>
              <ProyectCard
                titulo={item.titulo}
                descripcion={item.descripcion}
                tecnologias={item.tecnologias}
                externalLink={item.externalLink}
                githubRepo={item.githubRepo}
                foto= {item.foto}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ProyectContainer;
