import React from "react";
import IntroPicture from "../components/introPicture/IntroPicture";

function Homepage() {
  return (
    <div
      className="mt-3"
      // style={{ width: "90rem", margin: "0 auto" }}
      // style={{ width: "50rem" }}
    >
      <IntroPicture />
      <h2 className="mt-3"> สินค้าทั้งหมด</h2>
    </div>
  );
}

export default Homepage;
