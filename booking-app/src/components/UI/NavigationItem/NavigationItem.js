import React from "react";
import "./NavigationItem.css";
import { NavLink } from "react-router-dom";
const navigationItem = (props) => (
  <li className="NavigationItems">
    <NavLink className="NavigationItem" exact to={"/"}>
      Requests
    </NavLink>
    <NavLink className="NavigationItem" exact to={"/service"}>
      Services
    </NavLink>
    <NavLink className="NavigationItem" exact to={"/payment"}>
      Payments
    </NavLink>
  </li>
);

export default navigationItem;
