import React from "react";

const CtaCategory = (props) => {
  return (
    <div className="CTA-category text-center">
      <a href="#">
        <img src={props.image} alt="" /> <p>{props.name}</p>
      </a>
    </div>
  );
};

export default CtaCategory;
