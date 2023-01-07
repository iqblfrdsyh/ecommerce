import React from "react";
import "./category.css";
import CtaCategory from "./CtaCategory";

const Catergory = () => {
  return (
    <div className="category mt-5">
      <h3 className="fw-bold">Choice Category</h3>
      <div className="d-flex flex-wrap justify-content-between">
        <CtaCategory
          name="Man Fashion"
          image="assets/category/man-fashion.png"
        />
        <CtaCategory
          name="Gadget Electronic"
          image="assets/category/gadget-electronic.png"
        />
        <CtaCategory
          name="Voucher Game"
          image="assets/category/voucher-game.png"
        />
        <CtaCategory name="Property" image="assets/category/property.png" />
        <CtaCategory
          name="Kids Fashion"
          image="assets/category/kids-fashion.png"
        />
        <CtaCategory
          name="Computer & Laptop"
          image="assets/category/computer.png"
        />
        <CtaCategory
          name="Woman Fashion"
          image="assets/category/woman-fashion.png"
        />
        <CtaCategory name="Sports" image="assets/category/sports.png" />
        <CtaCategory name="Gaming" image="assets/category/gaming.png" />
        <CtaCategory name="Film & Music" image="assets/category/film.png" />
        <CtaCategory name="View All" image="assets/category/view-all.png" />
      </div>
    </div>
  );
};

export default Catergory;
