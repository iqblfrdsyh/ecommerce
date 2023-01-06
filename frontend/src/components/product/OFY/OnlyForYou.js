import React from "react";
import CardProduct from "../CardProduct";

const OnlyForYou = () => {
  return (
    <div>
      <div>
        <h3 className="fw-bold mt-5">November Flash Sale</h3>
      </div>
      <div className="d-flex flex-wrap">
        <CardProduct />
      </div>
    </div>
  );
};

export default OnlyForYou;
