import React from "react";

function MenuTypeProd() {
  return (
    <div className="mt-3">
      <ul
        style={{ listStyle: "none" }}
        className="d-flex justify-content-center"
      >
        <li className="me-4">
          <a href="/all-products" className="text-decoration-none text-dark">
            <b>All products</b>
          </a>
        </li>
        <li className="me-4">
          <b>Incharge</b>
        </li>
        <li className="me-4">
          <b>Earbuds</b>
        </li>
        <li className="me-4">
          <b>MagSafe</b>
        </li>
      </ul>
    </div>
  );
}

export default MenuTypeProd;
