import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../ui/Card";
import classes from "./ProductItem.module.css";

function ProductItem({ _id, image, name, price, description }) {
  return (
    <div key={_id} className={classes.allProduct}>
      <NavLink
        to={{
          pathname: "/each-product",
        }}
        key={_id}
        state={{ _id, image, name, price, description }}
      >
        <Card>
          <img src={image} alt="ProductPic" className={classes.imgCard} />
          <div className={classes.nameCard}>{name}</div>
          <div className={classes.priceCard}>{price}</div>
        </Card>
      </NavLink>
    </div>
  );
}

export default ProductItem;
