import ProyectCard from "../ProyectCard/ProyectCard";
import styles from "./proyectContainer.module.css";



const ProyectContainer = (props) => {
  return (
    <section>
      <ul>
        {props.proyects.map((item, key) => {
          return (
            <li className={styles.jobList} key={key}>
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
