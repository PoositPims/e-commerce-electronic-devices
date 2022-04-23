import React from "react";

function EachProductPic({ image }) {
  console.log("image", image);
  return (
    <div>
      <img
        src={image}
        alt="productImg"
        style={{ width: "30rem", height: "30rem" }}
      />
    </div>
  );
}

export default EachProductPic;
