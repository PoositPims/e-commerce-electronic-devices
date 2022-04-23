import React from "react";

function Card(props) {
  return (
    <div
      className="card"
      // className="me-4"
      style={{
        marginRight: "20px",
        marginBottom: "20px",
        // width: "300px",
        // width: "18.75rem",
        // height: "340px",
        borderRadius: "10px",
        // marginRight: "26px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
        // marginBottom: "50px",
      }}
    >
      {props.children}
    </div>
  );
}

export default Card;
