import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import uuid from "react-uuid";

function Add() {
  const [id, setId] = useState("");
  const [empName, setEmpName] = useState("");
  const [empAge, setEmpAge] = useState("");
  const [empDesg, setEmpDesg] = useState("");
  const [empSalary, setEmpSalary] = useState("");

  let location = useNavigate();

  useEffect(() => {
    setId(uuid().slice(0, 6));
  }, []);

  const addUser = async (e) => {
    setId(uuid().slice(0, 6));

    e.preventDefault();
    const body = {
      id,
      empName,
      empAge,
      empDesg,
      empSalary,
    };
    console.log(body);
    // api call
    const result = await axios.post("http://localhost:8000/add-employee", body);
    console.log(result);
    alert(result.data.message);
    // redirect to admin page
    location("/");
  };
  return (
    <div className="container mt-2">
      <h1 className="text-center">Add Employee</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        voluptatem provident eius possimus ducimus iure rem et impedit hic fuga
        dolore, soluta consequatur cum sunt vel quaerat. Id cumque, aliquam
        repellendus voluptatum aspernatur ullam, dolores consectetur tempore
        odio facilis delectus culpa veritatis excepturi, voluptatibus architecto
        quas. Officia ducimus culpa facere repellat laboriosam. Expedita
        provident doloremque ea impedit eveniet adipisci cum libero. Cum
        voluptatum est accusamus iure! Sunt ipsam consectetur possimus autem
        dolorum aliquid, ipsum distinctio placeat, accusantium cum temporibus
        necessitatibus eveniet soluta odit eum, numquam mollitia quo. Ratione at
        vitae numquam nisi quisquam sit nam, sequi ipsam magni, dolorem
        consequuntur.
      </p>
      <div className="mt-3 border rounded p-3">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              onChange={(e) => setEmpName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Age"
              onChange={(e) => setEmpAge(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSalary">
            <Form.Label>Salary</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter salary"
              onChange={(e) => setEmpSalary(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Designation</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Designation"
              onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>

          <Button
            className="me-3"
            variant="success"
            type="submit"
            onClick={(e) => addUser(e)}
          >
            Add
          </Button>

          <Link to="/">
            <Button variant="warning" type="submit">
              Close
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Add;
