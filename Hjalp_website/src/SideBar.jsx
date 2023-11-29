import React from "react";
import { Link } from "react-router-dom";
import "./assets/css/sideBar.css";

function SideBar() {
  return (
    <div className="SideBar">
      <ul className="sideBarNav">
        <li>Elever</li>
        <li>Klassrum</li>
        <li>Schema</li>
        <li>Othmans Sexcave</li>

        {/* Link wraps the list item */}
        <li>
          <Link to="/">Registrera närvaro</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
