import React from "react";
import Card from "../ui/Card";

function ProductItem({ image, name, price }) {
  return (
    <div>
      <Card>
        <img
          src={image}
          alt="Earbuds"
          style={{ width: "300px", height: "300px" }}
        />
        <div className="d-flex justify-content-center mt-2">{name}</div>
        <div className="d-flex justify-content-center mt-2">{price}</div>
      </Card>
    </div>
  );
}

export default ProductItem;
