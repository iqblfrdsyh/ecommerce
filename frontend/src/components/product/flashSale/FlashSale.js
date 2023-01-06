import React from "react";
import CardFlashSale from "./CardFlashSale";
import "./flashSale.css";

const FlashSale = () => {
  return (
    <div>
      <h3 className="fw-bold mt-5">November Super Flash Sale ⚡</h3>
      <div className="d-flex flex-wrap">
        <CardFlashSale />
      </div>
    </div>
  );
};

export default FlashSale;
