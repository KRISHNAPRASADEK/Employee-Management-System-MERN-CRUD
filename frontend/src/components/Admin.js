import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

function Admin() {
  const [allEmployees, setAllEmployees] = useState([]);

  const fetchData = async () => {
    const result = await axios.get("http://localhost:8000/get-all-employees");
    setAllEmployees(result.data.employees);
  };

  useEffect(() => {
    fetchData();
  });

  // handleDelete
  const handleDelete = async (id) => {
    const result = await axios.delete(
      `http://localhost:8000/delete-employee/${id}`
    );
    alert((await result).data.message);
    fetchData();
  };
  return (
    <div className="container mt-2">
      <h1 className="mb-5 text-center">
        <i className="fa-solid fa-users me-3"></i>
        Employee Management System{" "}
        <Link to="/add">
          <button className="btn btn-info me-5">
            <i className="fa-solid fa-user-plus"></i> Add Employee
          </button>
        </Link>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio sit illo
        quaerat aut delectus aperiam numquam? Aliquam repudiandae libero quis
        esse rerum labore inventore molestiae, itaque dolor id vero recusandae
        totam incidunt? Odio, velit eligendi. Laborum modi atque sit earum
        quisquam eos explicabo, mollitia accusantium sapiente architecto
        recusandae consectetur facere odit veniam maxime debitis minus officiis
        nam asperiores soluta aut fugiat aliquam! Dignissimos iusto, provident
        inventore adipisci obcaecati nemo labore nam saepe accusamus ad placeat
        autem atque amet corporis laudantium doloremque, mollitia earum magnam
        ex vitae recusandae. Praesentium, dicta magni molestias cumque
        reprehenderit aspernatur voluptas expedita laudantium quia quas
        corporis.
      </p>
      <h1 className="mb-5">Employee Detailes</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allEmployees.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.uname}</td>
              <td>{item.designation}</td>
              <td>{item.salary}</td>
              <td>{item.age}</td>
              <td>
                <Link to={"edit/" + item.id}>
                  <button type="button" className="btn btn-primary me-3">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                </Link>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={(e) => handleDelete(item.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Admin;
