import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../ui/Card";

function ProductItem({ _id, image, name, price, description }) {
  return (
    <div key={_id}>
      <NavLink
        to={{
          pathname: "/each-product",
        }}
        key={_id}
        state={{ _id, image, name, price, description }}
      >
        <Card>
          <img
            src={image}
            alt="Earbuds"
            style={{ width: "300px", height: "300px" }}
          />
          <div className="d-flex justify-content-center mt-2">{name}</div>
          <div className="d-flex justify-content-center mt-2">{price}</div>
        </Card>
      </NavLink>
    </div>
  );
}

export default ProductItem;
