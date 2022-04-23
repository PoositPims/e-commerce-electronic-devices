import React from "react";
import ProductItem from "../components/allProducts/ProductItem";
import { MOCK_DATAS } from "../data/mock-data";

function EarbudsType() {
  const earbuds = MOCK_DATAS.filter((product) => product.type === "earbuds");

  return (
    <div className="d-flex flex-wrap">
      {earbuds.map((product) => (
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

export default EarbudsType;
