import React from "react";
import "./Layout.css";
import Toolbar from "../Toolbar/Toolbar";

const layout = (props) => {
  return (
    <div>
      <Toolbar />
      <main className="Container"> {props.children}</main>
    </div>
  );
};

export default layout;
