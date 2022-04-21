import React from "react";

function Card(props) {
  return (
    <div
      className="me-4"
      style={{
        width: "300px",
        // height: "340px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
        marginBottom: "50px",
      }}
    >
      {props.children}
    </div>
  );
}

export default Card;
