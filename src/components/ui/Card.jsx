import React from "react";

function Card(props) {
  return (
    <div
      class="card"
      style={{
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      {props.children}
    </div>
  );
}

export default Card;
