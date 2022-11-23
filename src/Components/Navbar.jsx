import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/form">form</NavLink>
        </li>
        <li>
          <NavLink to="/form">form</NavLink>
        </li>
        <li>
          <NavLink to="/form">form</NavLink>
        </li>
        <li>
          <NavLink to="/form">form</NavLink>
        </li>
        <li>
          <NavLink to="/form">form</NavLink>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
