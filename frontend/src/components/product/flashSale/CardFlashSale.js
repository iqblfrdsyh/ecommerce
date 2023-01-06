import React, { useEffect, useState } from "react";
import "./flashSale.css";
import axios from "axios";

const CardFlashSale = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const res = await axios.get(
        "https://data.mongodb-api.com/app/data-dmsea/endpoint/product/1"
      );
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      {product.map((product) => {
        return (
          <div className="card card-flash-sale m-3 mt-4">
            <div className="image-flash-sale p-4 d-flex justify-content-center rounded">
              <img src={product.imageURL} alt="" />
            </div>
            <div className="px-3">
              <p className="text-secondary mt-3">{product.category}</p>
              <h5 className="name-product">{product.product}</h5>
              <div className="price d-flex fw-bold justify-content-between">
                <p className="text-secondary text-decoration-line-through">
                  {product.realPrice}
                </p>
                <p className=" me-5">{product.discountPrice}</p>
                <p
                  className="text-danger rounded"
                  style={{
                    backgroundColor: "rgba(255, 0, 0, 0.1)",
                  }}
                >
                  {product.discount}
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <progress max={500} value={product.sold}></progress>
                <p className="text-secondary">{product.sold} Sold</p>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default CardFlashSale;
