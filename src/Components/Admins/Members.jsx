import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { RiH2 } from "react-icons/ri";
import { Link } from "react-router-dom";
export default function Members() {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9090")
      .then((res) => setMembers(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container mt-5">
      <Link to="/create" className="btn btn-success">
        Members create
      </Link>
      {members.length !== 0 ? (
        <Table className="table">
          <thead>
            <tr key={members.id}>
              <th>#</th>
              <th>Name</th>
              <th>Password</th>
              <th>Phone</th>
              <th>Email</th>
              <th>User Mileage</th> {/* camelCase로 수정 */}
              <th>Join Date</th>
              <th>Birth Date</th>
              <th>Address</th>
              <th>Grade Name</th> {/* camelCase로 수정 */}
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td>{member.id}</td>
                <td>{member.name}</td> {/* camelCase로 수정 */}
                <td>{member.password}</td> {/* camelCase로 수정 */}
                <td>{member.phone}</td> {/* camelCase로 수정 */}
                <td>{member.email}</td> {/* camelCase로 수정 */}
                <td>{member.userMileage}</td>
                <td>{member.joinDate}</td>
                <td>{member.birthDate}</td>
                <td>{member.address}</td>
                <td>{member.gradeName}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h2>No Records</h2>
      )}
    </div>
  );
}