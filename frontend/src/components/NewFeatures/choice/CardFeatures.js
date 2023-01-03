import React from "react";
import "../new-features.css";

const CardFeatures = (props) => {
  return (
    <div className={`${props.classCard} card-features text-white m-3`}>
      <div className="d-flex">
        <img src={props.image} alt="" />
        <p className="m-2 ms-3">{props.title}</p>
      </div>
      <div className="d-flex justify-content-between mt-3">
        <p className="product">Product</p>
        <p className="stock">{props.stock} Stock</p>
      </div>
    </div>
  );
};

export default CardFeatures;
