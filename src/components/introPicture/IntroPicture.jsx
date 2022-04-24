import React from "react";
import classes from "./IntroPicture.module.css";

function IntroPicture() {
  return (
    <>
      <div className={classes.articlePic}>
        <img src="Banner.png" alt="" />
        <div className={classes.word}>
          <h2
          // style={{ marginBottom: "27px" }}
          >
            <strong>Your best experiences</strong>
          </h2>
          <p>is our jobs.</p>
        </div>
      </div>
    </>
  );
}

export default IntroPicture;
