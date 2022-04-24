import React from "react";
import classes from "./Card.module.css";

function Card(props) {
  return (
    <div
      // class="card"
      className={classes.card}
      // style={{
      //   borderRadius: "10px",
      //   boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
      // }}
    >
      {props.children}
    </div>
  );
}

export default Card;
