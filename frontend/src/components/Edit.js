import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate, useParams } from "react-router-dom";

function Edit() {
  const [id, setId] = useState("");
  const [empName, setEmpName] = useState("");
  const [empAge, setEmpAge] = useState("");
  const [empDesg, setEmpDesg] = useState("");
  const [empSalary, setEmpSalary] = useState("");

  let location = useNavigate();

  // get path parameter from url
  const params = useParams();
  // console.log(params.id);

  // api call to get detailes of particular employee from server
  const fetchEmployee = async () => {
    const result = await axios.get(
      "http://localhost:8000/get-an-employee/" + params.id
    );
    console.log(result);
    setId(result.data.employee.id);
    setEmpName(result.data.employee.uname);
    setEmpAge(result.data.employee.age);
    setEmpDesg(result.data.employee.designation);
    setEmpSalary(result.data.employee.salary);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const body = {
      id,
      empName,
      empAge,
      empDesg,
      empSalary,
    };

    // api call to update particular employee
    const result = await axios.post(
      "http://localhost:8000/update-employee",
      body
    );
    alert(result.data.message);
    // redirect to admin page
    location("/");
  };

  useEffect(() => {
    fetchEmployee();
  }, []);
  return (
    <div className="container mt-2">
      <h1 className="text-center">Edit Employee</h1>
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
              value={empName}
              onChange={(e) => setEmpName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Age"
              value={empAge}
              onChange={(e) => setEmpAge(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSalary">
            <Form.Label>Salary</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter salary"
              value={empSalary}
              onChange={(e) => setEmpSalary(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Designation</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Designation"
              value={empDesg}
              onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>

          <Button
            className="me-3"
            variant="success"
            type="submit"
            onClick={(e) => handleUpdate(e)}
          >
            Update
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

export default Edit;
