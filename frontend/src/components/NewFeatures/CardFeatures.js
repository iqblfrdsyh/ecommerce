import React from "react";
import "./new-features.css";

const CardFeatures = (props) => {
  return (
    <div className={props.classCard}>
      <div className="d-flex">
        <img src={props.image} alt="" /> <p className="m-2">{props.title}</p>
      </div>
      <div>
        <p>Product</p> <p>{props.stock}</p>
      </div>
    </div>
  );
};

export default CardFeatures;
