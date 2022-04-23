import React, { useState } from "react";
import classes from "./MenuTypeProd.module.css";

function MenuTypeProd() {
  const [menuBar, setMenuBar] = useState(false);

  return (
    <div className={classes.menuType}>
      <ul className={classes.menu}>
        <div className={classes.menuEach}>
          <li className="me-4">
            <a
              href="/all-products"
              className="text-decoration-none"
              style={{ color: "#e1e6ed" }}
            >
              <b>All products</b>
            </a>
          </li>
          <li className="me-4">
            <a
              href="/incharge"
              className="text-decoration-none"
              style={{ color: "#e1e6ed" }}
            >
              <b>Incharge</b>
            </a>
          </li>
          <li className="me-4">
            <a
              href="/earbuds"
              className="text-decoration-none"
              style={{ color: "#e1e6ed" }}
            >
              <b>Earbuds</b>
            </a>
          </li>
          <li className="me-4">
            <a
              href="/others"
              className="text-decoration-none"
              style={{ color: "#e1e6ed" }}
            >
              <b>others</b>
            </a>
          </li>
        </div>
        {/* <li className="me-4" onClick={() => setMenuBar(!menuBar)}>
          <b>
            <i class="bi bi-list" style={{ color: "white" }}></i>
          </b>
        </li> */}
      </ul>
      <li className={classes.liCard}>
        <button className="btn rounded-pill ">
          <i class="bi bi-cart3" />
        </button>
      </li>
    </div>
  );
}

export default MenuTypeProd;
