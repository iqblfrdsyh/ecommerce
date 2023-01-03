import React from "react";
import CardFeatures from "./CardFeatures";

const NewFeatures = () => {
  return (
    <div className="new-features">
      <h2>Now Easier To Choose</h2>
      <div>
        <CardFeatures
          classCard="card-features popular text-white"
          image="assets/new-features/popular.png"
          title="Popular Product"
        />
      </div>
    </div>
  );
};

export default NewFeatures;
