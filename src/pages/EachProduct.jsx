import React from "react";
import { useLocation } from "react-router-dom";

function EachProduct() {
  const location = useLocation();
  const product = location.state;
  console.log("product", product);

  return (
    <div className="d-flex justify-content-around">
      <img
        src={product.image}
        alt="productImg"
        style={{ width: "30rem", height: "30rem" }}
      />
      <div className="d-flex flex-column justify-content-around">
        <div className="fs-3">
          <b>{product.name}</b>
        </div>
        <div style={{ width: "50rem" }}>{product.description}</div>
        <div>
          <b>{product.price}</b>
        </div>
        <div className="align-self-center">
          <button
            className="btn rounded-pill text-white"
            style={{ backgroundColor: "#AA2A31" }}
          >
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
}

export default EachProduct;
