import React from "react";
import CardFlashSale from "./CardFlashSale";
import "./flashSale.css";

const FlashSale = () => {
  return (
    <div>
      <h3 className="fw-bold mt-5">November Flash Sale</h3>
      <div className="d-flex flex-wrap justify-content-center">
        <CardFlashSale />
      </div>
    </div>
  );
};

export default FlashSale;
