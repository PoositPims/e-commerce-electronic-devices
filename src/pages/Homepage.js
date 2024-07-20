import React from "react";
import Experience from "../components/Homepage/Experience";
import IntroPicture from "../components/introPicture/IntroPicture";
import classes from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={classes.homepage}>
      <IntroPicture />
      <Experience />
    </div>
  );
}

export default Homepage;
