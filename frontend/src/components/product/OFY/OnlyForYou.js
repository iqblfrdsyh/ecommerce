import React from "react";
import CardProduct from "../CardProduct";

const OnlyForYou = () => {
  return (
    <div>
      <div>
        <h3 className="fw-bold mt-5">Today Is Only For You</h3>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        <CardProduct API="https://data.mongodb-api.com/app/data-dmsea/endpoint/product/2" />
      </div>
    </div>
  );
};

export default OnlyForYou;
