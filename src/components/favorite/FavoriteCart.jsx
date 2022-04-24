import React from "react";
import { useLocation } from "react-router-dom";
import Card from "../ui/Card";

function Favorite({ product }) {
  const location = useLocation();
  const products = location.state;
  console.log("product", products);
  return (
    <div>
      <h1>{product.name}</h1>
      <Card>
        <img src={product.image} alt="ProductPic" />
        <div>
          <b>{product.name}</b>
        </div>
        <div>
          <b>{product.price}</b>
        </div>
      </Card>
    </div>
  );
}

export default Favorite;
