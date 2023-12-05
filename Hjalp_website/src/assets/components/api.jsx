import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/students.css";

function Api() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("Helloooooooooooo!");
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
  }, []);

  return (
    <>
      <div className="studentsContainer">
        <div className="studentSettings">
          <h2>API Output:</h2>
        </div>
        <div className="studentGrid">
          {users.map((user) => (
            <div className="studentCard" key={user.id}>
              <h3>{user.username}</h3>
              <p>{user.class_id}</p>
              <div className="attendanceButtons">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Api;
