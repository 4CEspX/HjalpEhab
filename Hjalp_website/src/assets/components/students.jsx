import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/students.css";

function Students() {
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
          <h2>Klass: 1Teknik1</h2>
          <button>Redigera</button>
        </div>
        <div className="studentGrid">
          <div className="studentCard">
            <h3>Adam Andersson</h3>
            <p>1Teknik1</p>
            <div className="attendanceButtons">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="studentCard">
            <h3>Adam Andersson</h3>
            <p>1Teknik1</p>
            <div className="attendanceButtons">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="studentCard">
            <h3>Adam Andersson</h3>
            <p>1Teknik1</p>
            <div className="attendanceButtons">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="studentCard">
            <h3>Adam Andersson</h3>
            <p>1Teknik1</p>
            <div className="attendanceButtons">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="studentCard">
            <h3>Adam Andersson</h3>
            <p>1Teknik1</p>
            <div className="attendanceButtons">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="studentCard">
            <h3>Adam Andersson</h3>
            <p>1Teknik1</p>
            <div className="attendanceButtons">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="studentCard">
            <h3>Adam Andersson</h3>
            <p>1Teknik1</p>
            <div className="attendanceButtons">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="studentCard">
            <h3>Adam Andersson</h3>
            <p>1Teknik1</p>
            <div className="attendanceButtons">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="studentCard">
            <h3>Adam Andersson</h3>
            <p>1Teknik1</p>
            <div className="attendanceButtons">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="studentCard">
            <h3>Adam Andersson</h3>
            <p>1Teknik1</p>
            <div className="attendanceButtons">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="studentCard">
            <h3>Adam Andersson</h3>
            <p>1Teknik1</p>
            <div className="attendanceButtons">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="studentCard">
            <h3>Adam Andersson</h3>
            <p>1Teknik1</p>
            <div className="attendanceButtons">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="studentCard">
            <h3>Adam Andersson</h3>
            <p>1Teknik1</p>
            <div className="attendanceButtons">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="studentCard">
            <h3>Adam Andersson</h3>
            <p>1Teknik1</p>
            <div className="attendanceButtons">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="studentCard">
            <h3>Adam Andersson</h3>
            <p>1Teknik1</p>
            <div className="attendanceButtons">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="studentCard">
            <h3>Adam Andersson</h3>
            <p>1Teknik1</p>
            <div className="attendanceButtons">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {/* {users.map((user) => (
            <tr key={user.id}>
              <td>
                <p>{user.name}</p>
              </td>
              <td>
                <p>{user.klass}</p>
              </td>
              <td>
                <p>{user.password}</p>
              </td>
            </tr>
          ))} */}
      </div>
    </>
  );
}

export default Students;
