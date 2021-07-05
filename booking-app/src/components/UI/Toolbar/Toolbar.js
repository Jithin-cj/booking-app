import React from "react";
import "./Toolbar.css";
import NavigationItem from "../NavigationItem/NavigationItem";

const toolbar = (props) => (
  <header className="Toolbar">
    <nav className="Toolbar-nav">
      <NavigationItem />
    </nav>
  </header>
);

export default toolbar;
