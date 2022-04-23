import React from "react";
import ProductItem from "./ProductItem";
import { MOCK_DATAS } from "../../data/mock-data";

function ProductLists() {
  // console.log("MOCKDATAS", MOCK_DATAS);
  return (
    <div className="d-flex flex-wrap">
      {MOCK_DATAS?.map((product, key) => (
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
