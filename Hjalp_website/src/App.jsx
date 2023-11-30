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
        console.log(response.data);
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
          <table className="studentInfo">
            <tr>
              <th>Namn:</th>
              <th>Klass:</th>
              <th>Lösenord:</th>
            </tr>
            {info.map((info) => (
              <tr key={info.id}>
                <td>
                  <p>{info.name}</p>
                </td>
                <td>
                  <p>{info.klass}</p>
                </td>
                <td>
                  <p>{info.password}</p>
                </td>
              </tr>
            ))}
          </table>
          <ul>
            {users.map((b) => (
              <li key={b.id}>
                {b.name} - {b.klass} - {b.timestamp}
              </li>
            ))}
          </ul>
        </div>
      </>
    </Router>
  );
}

export default App;
