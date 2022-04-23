import React, { useState } from "react";
import ProductItem from "../components/allProducts/ProductItem";
import { MOCK_DATAS } from "../data/mock-data";
// import { getIncharge } from "../data/mock-data";

function InchargeType() {
  const incharge = MOCK_DATAS.filter((product) => product.type === "incharge");

  return (
    <div className="d-flex flex-wrap">
      {incharge.map((product) => (
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

export default InchargeType;
