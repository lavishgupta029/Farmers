import React from "react";
import Navbar from "../navbar";
function Layout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
}

export default Layout;
