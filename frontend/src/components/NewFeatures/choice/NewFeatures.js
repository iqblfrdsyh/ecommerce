import React from "react";
import CardFeatures from "./CardFeatures";

const NewFeatures = () => {
  return (
    <div className="new-features mt-5">
      <h3 className="fw-bold">Now Easier To Choose</h3>
      <div className="d-flex flex-wrap justify-content-center mt-4">
        <CardFeatures
          classCard="popular"
          image="assets/new-features/popular.png"
          title="Popular Product"
          stock="341"
        />
        <CardFeatures
          classCard="most-wanted"
          image="assets/new-features/most-wanted.png"
          title="Most Wanted"
          stock="162"
        />
        <CardFeatures
          classCard="top-fashion"
          image="assets/new-features/top-fashion.png"
          title="Top Fashion 2022"
          stock="228"
        />
        <CardFeatures
          classCard="bestseller"
          image="assets/new-features/bestseller.png"
          title="Bestseller"
          stock="422"
        />
        <CardFeatures
          classCard="best-shop"
          image="assets/new-features/best-shop.png"
          title="Best Shop"
          stock="52"
        />
      </div>
    </div>
  );
};

export default NewFeatures;
