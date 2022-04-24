import React from "react";
import classes from "./ExpBox.module.css";

function ExpBox({ description, icon }) {
  return (
    <div>
      <div className={classes.expBox}>
        <i class={icon}></i>
      </div>
      <p className={classes.description}>
        <b>{description}</b>
      </p>
    </div>
  );
}

export default ExpBox;
