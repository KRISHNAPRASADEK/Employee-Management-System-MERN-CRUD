const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ems");

// models
// to store employee detailes
const Employee = mongoose.model("Employee", {
  id: String,
  uname: String,
  age: String,
  designation: String,
  salary: String,
});

module.exports = {
  Employee,
};
