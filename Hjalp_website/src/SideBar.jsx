// import { useState } from "react";
import "./assets/css/sideBar.css";

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
        <button className="sideBarBtn">Registrera närvaro</button>
      </div>
    </>
  );
}

export default SideBar;
