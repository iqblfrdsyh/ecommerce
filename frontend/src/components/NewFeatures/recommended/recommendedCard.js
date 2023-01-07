import React from "react";

const RecomendedCard = (props) => {
  return (
    <div className="card recomend-card mt-4">
      <div className={`desc fw-bold ${props.colorBorder}`}>{props.desc}</div>
      <div className="image mt-4 rounded">
        <img src={props.image1} alt="" />
        <img className="ms-1" src={props.image2} alt="" />
      </div>
    </div>
  );
};

export default RecomendedCard;
