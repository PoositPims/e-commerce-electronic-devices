import React from "react";
import ProductItem from "./ProductItem";
import { MOCK_DATAS } from "../../data/mock-data";

function ProductLists() {
  // console.log("MOCKDATAS", MOCK_DATAS);
  return (
    <div className="d-flex flex-wrap">
      {
        MOCK_DATAS?.map((product, key) => (
          <ProductItem
            key={product._id}
            _id={product._id}
            name={product.name}
            image={product.image}
            price={product.price}
            description={product.description}
          />
        ))
        /* <ProductItem image="HYPHEN-2.jpeg" name="Earbuds" price="THB 1000" />
      <ProductItem
        image="inCharge 6 Max.png"
        name="inCharge 6 Max"
        price="THB 1000"
      />
      <ProductItem
        image="inCharge-6.jpeg"
        name="inCharge 6 "
        price="THB 1000"
      />
      <ProductItem
        image="inCharge Pro.png"
        name="inCharge Pro"
        price="THB 1000"
      />
      <ProductItem image="Magsafe.png" name="Magsafe" price="THB 1000" />
      <ProductItem image="Tau.jpeg" name="Tau" price="THB 1000" /> */
      }
    </div>
  );
}

export default ProductLists;
