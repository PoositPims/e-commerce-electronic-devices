import React from "react";

function MenuTypeProd() {
  return (
    <div
      className="mt-2 mb-2"
      style={{ backgroundColor: "black", height: "2.5rem" }}
    >
      <ul
        className="d-flex justify-content-center"
        style={{ listStyle: "none" }}
      >
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
      </ul>
    </div>
  );
}

export default MenuTypeProd;
