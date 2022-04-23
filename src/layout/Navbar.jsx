import React from "react";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <div
      className={classes.bg}
      // className="d-flex justify-content-between"
      // style={{ backgroundColor: "", width: "auto" }}
    >
      <div>
        <a href="/">
          <img
            src="logo.png"
            alt="logo"
            // className="p-3 mt-2 mb-2"
            className={classes.image}
            // style={{ width: "15.625rem", backgroundColor: "#AA2A31" }}
          />
        </a>
      </div>
      {/* <ul className={classes.cartMenu}>
        <li
          // className="me-5"
          className={classes.liCard}
        >
          <button
            className="btn rounded-pill "
            // style={{ backgroundColor: "#AA2A31" }}
          >
            <i class="bi bi-cart3" />
          </button>
        </li>
      </ul> */}
    </div>
  );
}

export default Navbar;
