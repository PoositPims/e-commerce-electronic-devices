import React from "react";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={classes.bg}>
      <div>
        <a href="/" style={{ textDecoration: "none" }}>
          <h2 className={classes.logoWord}>POOSIT gadget</h2>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
