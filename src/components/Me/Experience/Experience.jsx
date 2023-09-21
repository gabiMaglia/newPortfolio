import useCardTransition from "../../../anim/cardTransition";
import Card1 from "../../common/Card1/Card1";
import styles from "./experience.module.css";

const experienceMock = [
  {
    title: "Municipalidad de Granadero baigorria",
    activity: "Area Manage",
    startDate: "Aplil-2017",
    endDate: "Present Day",
    description: "Responsible for the maintenance and operation(servers, network antenas adn cameras) of the surveillance Center of Granadero Baigorri city"
  }
]


const Experience = () => {
  useCardTransition();

  return (
    <section className={styles.expCont}>
      {
        experienceMock.map((e, key) => {
          return (
            <Card1
            key={key}
              title={e.title}
              activity={e.activity}
              startDate={e.startDate}
              endDate={e.endDate}
              description={e.description}
            />
          )
        })

      }

    </section>
  );
};

export default Experience;
