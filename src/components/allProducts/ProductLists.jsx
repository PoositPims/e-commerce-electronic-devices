import React from "react";
import ProductItem from "./ProductItem";
import { MOCK_DATAS } from "../../data/mock-data";
import classes from "./ProductLists.module.css";

function ProductLists() {
  return (
    <div className={classes.productLists}>
      {MOCK_DATAS?.map((product) => (
        <ProductItem
          key={product._id}
          _id={product._id}
          name={product.name}
          image={product.image}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
}

export default ProductLists;
