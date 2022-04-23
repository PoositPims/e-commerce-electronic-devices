import React, { Children } from "react";
import MenuTypeProd from "./MenuTypeProd";
import Navbar from "./Navbar";

function Layout(props) {
  return (
    <div style={{ backgroundColor: "red" }}>
      {/* <div style={{ width: "50rem" }}> */}
      {/* <div> */}
      {/* <Navbar /> */}
      {/* <MenuTypeProd /> */}
      {/* </div> */}
      {/* </div> */}
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
