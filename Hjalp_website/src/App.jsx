import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";

function App() {
  const [users, setUsers] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    // Make a GET request to the server API
    axios
      .get("http://192.168.220.50:3000/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    axios
      .get("http://192.168.220.50:3000/api/info")
      .then((res) => {
        setInfo(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Router>
      {" "}
      {/* Wrap your App with BrowserRouter */}
      <>
        <Header />
        <SideBar />
        <div className="appContainer">
          <h1>User List</h1>
          <ul>
            {info.map((a) => (
              <li key={a.id}>
                {a.name} - {a.klass} - {a.password}
              </li>
            ))}
          </ul>
        </div>
      </>
    </Router>
  );
}

export default App;
