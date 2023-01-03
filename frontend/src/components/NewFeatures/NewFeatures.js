import React from "react";
import CardFeatures from "./choice/CardFeatures";
import RecomendedCard from "./recommended/recommendedCard";

const NewFeatures = () => {
  return (
    <div className="new-features mt-5">
      <h3 className="fw-bold">Now Easier To Choose</h3>
      <div className="choice">
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
      <div className="recomended d-flex flex-wrap justify-content-center">
        <RecomendedCard
          desc="The goods are ready stock and ready to be shipped"
          image1="assets/new-features/recomended/recommend1.png"
          image2="assets/new-features/recomended/recommend2.png"
          colorBorder="desc-border-1"
        />
        <RecomendedCard
          desc="New items for those of you who want to pre order"
          image1="assets/new-features/recomended/recommend3.png"
          image2="assets/new-features/recomended/recommend4.png"
          colorBorder="desc-border-2"
        />
        <RecomendedCard
          desc="The top second hand items available here"
          image1="assets/new-features/recomended/recommend5.png"
          image2="assets/new-features/recomended/recommend6.png"
          colorBorder="desc-border-1"
        />
        <RecomendedCard
          desc="You can get all free shipping products here"
          image1="assets/new-features/recomended/recommend7.png"
          image2="assets/new-features/recomended/recommend8.png"
          colorBorder="desc-border-2"
        />
      </div>
    </div>
  );
};

export default NewFeatures;
