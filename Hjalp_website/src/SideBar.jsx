import React from "react";
import { Link } from "react-router-dom";
import "./assets/css/sideBar.css";

function SideBar() {
  return (
    <div className="SideBar">
      <ul className="sideBarNav">
        <li>
          <Link to="/students">Elever</Link>
        </li>
        <li>
          <Link to="/api">Klasser</Link>
        </li>
        <li>
          <Link to="/">Schema</Link>
        </li>
        {/* Link wraps the list item */}
        <li>
          <Link to="/attendence">Registrera närvaro</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
