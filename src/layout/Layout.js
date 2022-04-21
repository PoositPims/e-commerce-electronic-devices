import React, { Children } from "react";
import MenuTypeProd from "./MenuTypeProd";
import Navbar from "./Navbar";

function Layout(props) {
  return (
    <div>
      <Navbar />
      <MenuTypeProd />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
