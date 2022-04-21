import React from "react";

function Navbar() {
  return (
    <div className="d-flex justify-content-between container">
      <div>
        <img
          src="logo.png"
          alt="logo"
          className="p-3 mt-2"
          style={{ width: "250px", backgroundColor: "#AA2A31" }}
        />
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
        <li className="me-5  ">
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
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
