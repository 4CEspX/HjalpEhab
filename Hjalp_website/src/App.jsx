import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import Header from "./Header";
import SideBar from "./SideBar";
import "./App.css";

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
      .then((response) => {
        setInfo(response.data);
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
            {users.map((user) => (
              <li key={user.id}>
                {user.name} - {user.klass} - {user.timestamp}
                {info.name} - {info.klass} - {info.password}
              </li>
            ))}
          </ul>
        </div>
      </>
    </Router>
  );
}

export default App;
