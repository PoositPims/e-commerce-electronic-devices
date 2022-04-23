import React from "react";

function Navbar() {
  return (
    // <div style={{ backgroundColor: "black" }}>
    <div
      className="d-flex justify-content-between"
      style={{ backgroundColor: "black", width: "auto" }}
      // style={{ width: "90rem", margin: "0 auto" }}
    >
      <div>
        <a href="/">
          <img
            src="logo.png"
            alt="logo"
            className="p-3 mt-2 mb-2"
            style={{ width: "15.625rem", backgroundColor: "#AA2A31" }}
          />
        </a>
      </div>
      <ul style={{ listStyle: "none", display: "flex" }}>
        <li className="me-5">
          <button
            className="btn rounded-pill text-white px-4 py-2 mt-3"
            style={{ backgroundColor: "#AA2A31" }}
          >
            menu1
          </button>
        </li>
        {/* <li className="me-5  ">
          <button
            className="btn rounded-pill text-white px-4 py-2 mt-3"
            style={{ backgroundColor: "#AA2A31" }}
          >
            menu2
          </button>
        </li>
        <li className="me-5">
          <button
            className="btn rounded-pill text-white px-4 py-2 mt-3"
            style={{ backgroundColor: "#AA2A31" }}
          >
            menu3
          </button>
        </li> */}
      </ul>
    </div>
    // </div>
  );
}

export default Navbar;
