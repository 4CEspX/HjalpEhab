// import { useState } from "react";
import placeholder_person from "./assets/images/placeholder_person.png";
import "./assets/css/header.css";

function App() {
//   const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <div className="leftNavDiv">
          <div className="leftNavDivUp"><h1>NTI Gymnasiet</h1></div>
          <div className="leftNavDivDown"><h2>Personal</h2></div>
        </div>
        <div className="middleNavDiv"></div>
        <div className="rightNavDiv">
          <img src={placeholder_person} alt="Person photo" />
          <h4>Admin Admin</h4>
        </div>
      </header>
    </>
  );
}

export default App;
