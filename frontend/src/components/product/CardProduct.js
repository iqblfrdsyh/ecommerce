import axios from "axios";
import React, { useEffect, useState } from "react";

const CardProduct = (props) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const res = await axios.get(`${props.API}`);

      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      {product.map((product) => {
        return (
          <div className="card card-product m-3 mt-4">
            <div className="image-product p-4 d-flex justify-content-center rounded">
              <img src={product.imageURL} alt="" />
            </div>
            <div className="px-3">
              <p
                style={{
                  color: "#52057B",
                  background: "rgba(82, 5, 123, 0.1)",
                  padding: "7px",
                  marginTop: "10px",
                  width: "fit-content",
                  borderRadius: "5px",
                  fontSize: "14px",
                }}
              >
                {product.category}
              </p>
              <h5 className="name-product">{product.product}</h5>
              <div className="price d-flex fw-bold justify-content-between">
                <p>{product.price}</p>
                <p>
                  <img src="assets/product/rate.png" alt="" /> {product.rate}
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-secondary" style={{ fontSize: "13px" }}>
                  <img src="assets/product/location.png" alt="" />{" "}
                  {product.kota}
                </p>
                <p className="text-secondary" style={{ fontSize: "13px" }}>
                  {product.sold} Sold
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default CardProduct;
