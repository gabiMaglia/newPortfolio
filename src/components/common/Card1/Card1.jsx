import React from "react";
import './card.css'

const Card1 = (props) => {
  const  {title, activity, startDate, endDate, description} = props
  return (
    <article id="card_cont">
      <h3 className="card-title border bg-black text-white">
        {" "}
        <strong> {title} </strong>
      </h3>
      <h4 className="card-activity border bg-black text-white">{activity}</h4>
      <p className="card-date d-flex ">
        <p className="hover-underline-animation-dark">{startDate} </p>{" "}
        <p className="hover-underline-animation-dark">{endDate}</p>
      </p>
      <p className="card-description border bg-black text-white">
        {" "}
      {description}
      </p>
    </article>
  );
};

export default Card1;
