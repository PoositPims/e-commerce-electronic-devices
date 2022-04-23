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
            alt="ProductPic"
            // style={{ width: "18.75rem", height: "18.75rem" }}
            style={{ width: "15rem", height: "15rem" }}
          />
          <div
            className="d-flex justify-content-center mt-2 text-decoration-none"
            style={{ color: "black" }}
          >
            {name}
          </div>
          <div
            className="d-flex justify-content-center mt-2 text-decoration-none"
            style={{ color: "black" }}
          >
            {price}
          </div>
        </Card>
      </NavLink>
    </div>
  );
}

export default ProductItem;
