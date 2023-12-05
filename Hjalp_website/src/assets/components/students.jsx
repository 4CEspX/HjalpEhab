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
        <table className="studentInfo">
          <tr>
            <th>Närvaro:</th>
            <th>Namn:</th>
            <th>Klass:</th>
          </tr>
          <tr>
            <td>
              <span></span>
            </td>
            <td>Adam Andersson</td>
            <td>1Teknik1</td>
          </tr>
          <tr>
            <td>
              <span></span>
            </td>
            <td>Elin Berg</td>
            <td>1Teknik1</td>
          </tr>
          <tr>
            <td>
              <span></span>
            </td>
            <td>Erik Eriksson</td>
            <td>1Teknik1</td>
          </tr>
          <tr>
            <td>
              <span></span>
            </td>
            <td>Greta Gustavsson</td>
            <td>1Teknik1</td>
          </tr>
          <tr>
            <td>
              <span></span>
            </td>
            <td>Ida Isaksson</td>
            <td>1Teknik1</td>
          </tr>
          <tr>
            <td>
              <span></span>
            </td>
            <td>Karl Karlsson</td>
            <td>1Teknik1</td>
          </tr>
          <tr>
            <td>
              <span></span>
            </td>
            <td>Lisa Lindström</td>
            <td>1Teknik1</td>
          </tr>
          <tr>
            <td>
              <span></span>
            </td>
            <td>Nils Nilsson</td>
            <td>1Teknik1</td>
          </tr>
          <tr>
            <td>
              <span></span>
            </td>
            <td>Oscar Olsson</td>
            <td>1Teknik1</td>
          </tr>
          <tr>
            <td>
              <span></span>
            </td>
            <td>Alva Andersson</td>
            <td>1Teknik2</td>
          </tr>
          <tr>
            <td>
              <span></span>
            </td>
            <td>Bengt Berg</td>
            <td>1Teknik2</td>
          </tr>
          <tr>
            <td>
              <span></span>
            </td>
            <td>Clara Carlsson</td>
            <td>1Teknik2</td>
          </tr>
          <tr>
            <td>
              <span></span>
            </td>
            <td>Daniel Dahl</td>
            <td>1Teknik2</td>
          </tr>
          <tr>
            <td>
              <span></span>
            </td>
            <td>Emelie Eriksson</td>
            <td>1Teknik2</td>
          </tr>
          <tr>
            <td>
              <span></span>
            </td>
            <td>Frida Fredriksson</td>
            <td>1Teknik2</td>
          </tr>
          <tr>
            <td>
              <span></span>
            </td>
            <td>Gustav Gustafsson</td>
            <td>1Teknik2</td>
          </tr>
          <tr>
            <td>
              <span></span>
            </td>
            <td>Hanna Håkansson</td>
            <td>1Teknik2</td>
          </tr>
          <tr>
            <td>
              <span></span>
            </td>
            <td>Isak Isaksson</td>
            <td>1Teknik2</td>
          </tr>
          <tr>
            <td>
              <span></span>
            </td>
            <td>Johanna Johansson</td>
            <td>1Teknik2</td>
          </tr>
          <tr>
            <td>
              <span></span>
            </td>
            <td>Kalle Karlsson</td>
            <td>1Teknik2</td>
          </tr>
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
        </table>
      </div>
    </>
  );
}

export default Students;
