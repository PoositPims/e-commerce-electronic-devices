import React from "react";
import { useLocation } from "react-router-dom";
import EachProductDetail from "../components/eachProduct/EachProductDetail";
import EachProductPic from "../components/eachProduct/EachProductPic";

function EachProduct() {
  const location = useLocation();
  const product = location.state;
  console.log("product", product);

  return (
    <div className="d-flex justify-content-around">
      <EachProductPic image={product.image} />
      <div>
        <EachProductDetail
          name={product.name}
          price={product.price}
          description={product.description}
        />
      </div>
    </div>
  );
}

export default EachProduct;
