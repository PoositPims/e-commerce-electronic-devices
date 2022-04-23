import React from "react";
import ProductItem from "../components/allProducts/ProductItem";
import { MOCK_DATAS } from "../data/mock-data";

function OthersType() {
  console.log(" MOCK_DATAS", MOCK_DATAS);
  const other = MOCK_DATAS.filter((product) => product.type === "other");
  return (
    <div className="d-flex flex-wrap">
      {other.map((product) => (
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

export default OthersType;
