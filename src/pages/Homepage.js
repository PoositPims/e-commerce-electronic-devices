import React from "react";
import Experience from "../components/Homepage/Experience";
import IntroPicture from "../components/introPicture/IntroPicture";
import classes from "./Homepage.module.css";

function Homepage() {
  return (
    <div
      // className="mt-3"
      className={classes.homepage}
      // style={{ width: "90rem", margin: "0 auto" }}
      // style={{ width: "50rem" }}
    >
      <IntroPicture />
      <Experience />
    </div>
  );
}

export default Homepage;
