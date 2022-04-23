import React from "react";
import classes from "./EachProductDetail.module.css";

function EachProductDetail({ name, description, price }) {
  return (
    <div className="d-flex flex-column justify-content-around ">
      <div className={classes.name}>
        <b>{name}</b>
      </div>
      <div className={classes.description}>{description}</div>
      <div className={classes.price}>
        <b>{price}</b>
      </div>
      <div className={classes.button}>
        <button
          className="btn rounded-pill text-white"
          style={{ backgroundColor: "#AA2A31" }}
        >
          Add to card
        </button>
      </div>
    </div>
  );
}

export default EachProductDetail;
