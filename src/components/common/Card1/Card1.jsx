import React from "react";
import styles from './card.module.css'

const Card1 = (props) => {
  const  {title, activity, startDate, endDate, description} = props
  return (
    <article id={styles.cardCont}>
      <h3 className={`${styles.cardTitle} border bg-black text-white`}>
   
        <strong> {title} </strong>
      </h3>
      <h4 className={`${styles.cardActivity} border bg-black text-white`}>{activity}</h4>
      <span className={`${styles.cardDate} d-flex`}>
        <p className={`hover-underline-animation-dark`}>{startDate} </p>{" "}
        <p className={`hover-underline-animation-dark`}>{endDate}</p>
      </span>
      <p className={`${styles.cardDescription} border bg-black text-white`}>
      {description}
      </p>
    </article>
  );
};

export default Card1;
