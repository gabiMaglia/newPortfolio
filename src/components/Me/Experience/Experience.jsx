import useCardTransition from "../../../anim/cardTransition";
import Card1 from "../../common/Card1/Card1";
import "./experience.css";

const Experience = () => {
  useCardTransition();

  return (
    <section id="exp">
      <Card1
        title="Municipalidad de Granadero baigorria"
        activity="Area Manage"
        startDate="Present Day"
        endDate="Aplil-2017 "
        description="Responsible for the maintenance and operation(servers, network antenas adn cameras) of the surveillance Center of Granadero Baigorri city"
      />
    </section>
  );
};

export default Experience;
