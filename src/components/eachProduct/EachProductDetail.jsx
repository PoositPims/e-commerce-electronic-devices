import React from "react";

function EachProductDetail({ name, description, price }) {
  return (
    <div className="d-flex flex-column justify-content-around">
      <div className="fs-3" style={{ color: "black" }}>
        <b>{name}</b>
      </div>
      <div style={{ width: "50rem", color: "black" }}>{description}</div>
      <div style={{ width: "50rem", color: "black" }}>
        <b>{price}</b>
      </div>
      <div className="align-self-center">
        <button
          className="btn rounded-pill text-white"
          style={{ backgroundColor: "#AA2A31" }}
        >
          Add to card
        </button>
      </div>
    </div>
  );
}

export default EachProductDetail;
