import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

const Nav = props => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink exact className="navHeader" to="/login">
        Noca Store
      </NavLink>
    </nav>
  );
};

export default Nav;
