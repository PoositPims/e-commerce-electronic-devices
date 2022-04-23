import React from "react";
import classes from "./EachProductPic.module.css";

function EachProductPic({ image }) {
  return (
    <div className={classes.pic}>
      <img src={image} alt="productImg" />
    </div>
  );
}

export default EachProductPic;
