// Hjalp_website/src/App.js

import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Make a GET request to the server API
    axios
      .get("http://localhost:3000/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Header />
      <SideBar />
      <div>
        <h1>User List</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.klass} - {user.timestamp}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
