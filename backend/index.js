const express = require("express");
const cors = require("cors");
const server = express();
const logic = require("./services/logic");

server.use(
  cors({
    origin: "http://localhost:3000",
  })
);
server.use(express.json());

server.listen(8000, () => {
  console.log("employee server listening at port number 8000");
});

//get all employee api
server.get("/get-all-employees", (req, res) => {
  logic.allEmployees().then((result) => {
    res.status(result.statusCode).json(result);
  });
});

// add new employee api
server.post("/add-employee", (req, res) => {
  logic
    .addEmployee(
      req.body.id,
      req.body.empName,
      req.body.empAge,
      req.body.empDesg,
      req.body.empSalary
    )
    .then((result) => {
      res.status(result.statusCode).json(result);
    });
});

// delete employee api
server.delete("/delete-employee/:id", (req, res) => {
  logic.removeEmployee(req.params.id).then((result) => {
    res.status(result.statusCode).json(result);
  });
});

//get particular employee detailes api
server.get("/get-an-employee/:id", (req, res) => {
  logic.getAnEmployee(req.params.id).then((result) => {
    res.status(result.statusCode).json(result);
  });
});

//update particular employee detailes api
server.post("/update-employee", (req, res) => {
  logic
    .editEmployee(
      req.body.id,
      req.body.empName,
      req.body.empAge,
      req.body.empDesg,
      req.body.empSalary
    )
    .then((result) => {
      res.status(result.statusCode).json(result);
    });
});
