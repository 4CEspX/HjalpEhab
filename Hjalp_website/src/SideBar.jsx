// import { useState } from "react";
import "./assets/css/sideBar.css";
import { Link } from "react-router-dom";

function SideBar() {
  //   const [count, setCount] = useState(0);

  return (
    <>
      <div className="SideBar">
        <ul className="sideBarNav">
          <li>Elever</li>
          <li>Klassrum</li>
          <li>Schema</li>
          <li>Othmans Sexcave</li>
        </ul>
        <Link to={"./"}>
          <li>Registrera närvaro</li>
        </Link>
      </div>
    </>
  );
}

export default SideBar;
