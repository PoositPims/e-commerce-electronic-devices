import React from "react";
import { useLocation } from "react-router-dom";
import EachProductDetail from "../components/eachProduct/EachProductDetail";
import EachProductPic from "../components/eachProduct/EachProductPic";
import classes from "./EachProduct.module.css";

function EachProduct() {
  const location = useLocation();
  const product = location.state;
  // console.log("product", product);

  return (
    <div className={classes.eachProduct}>
      <div className={classes.pic}>
        <EachProductPic image={product.image} />
      </div>
      <div className={classes.detail}>
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
