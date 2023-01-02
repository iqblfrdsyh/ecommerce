import React from "react";

const CtaCategory = (props) => {
  return (
    <div className="CTA-category text-center">
      <img src={props.image} alt="" /> <p>{props.name}</p>
    </div>
  );
};

export default CtaCategory;
