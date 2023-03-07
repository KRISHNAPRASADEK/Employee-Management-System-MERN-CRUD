const db = require("./db");

const allEmployees = () => {
  return db.Employee.find().then((result) => {
    if (result) {
      return {
        statusCode: 200,
        employees: result,
      };
    } else {
      return {
        statusCode: 404,
        message: "Data is empty/server busy",
      };
    }
  });
};

const addEmployee = (id, uname, age, designation, salary) => {
  return db.Employee.findOne({ id }).then((result) => {
    if (result) {
      return {
        statusCode: 401,
        message: "employee Id already exist",
      };
    } else {
      const newEmp = new db.Employee({
        id,
        uname,
        age,
        designation,
        salary,
      });
      newEmp.save();

      return {
        statusCode: 200,
        message: "New employee added successfully",
      };
    }
  });
};

// delete employee
const removeEmployee = (id) => {
  return db.Employee.deleteOne({ id }).then((result) => {
    if (result) {
      return {
        statusCode: 200,
        message: "employee removed successfully",
      };
    } else {
      return {
        statusCode: 404,
        message: "No data found",
      };
    }
  });
};

// get a particular employee deatiles
const getAnEmployee = (id) => {
  return db.Employee.findOne({ id }).then((result) => {
    if (result) {
      return {
        statusCode: 200,
        employee: result,
      };
    } else {
      return {
        statusCode: 404,
        message: "Data is not found/server busy",
      };
    }
  });
};

// update employee
const editEmployee = (id, uname, age, designation, salary) => {
  return db.Employee.findOne({ id }).then((result) => {
    if (result) {
      result.id = id;
      result.uname = uname;
      result.age = age;
      result.designation = designation;
      result.salary = salary;
      result.save();
      return {
        statusCode: 200,
        message: "employee data updated successfully",
      };
    } else {
      return {
        statusCode: 404,
        message: "Data is not found/server busy",
      };
    }
  });
};

module.exports = {
  allEmployees,
  addEmployee,
  removeEmployee,
  getAnEmployee,
  editEmployee,
};
