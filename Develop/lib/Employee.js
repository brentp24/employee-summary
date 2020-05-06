// TODO: Write code to define and export the Employee class
  class Employee {
      constructor(employeeName, uniqueID, email, role) {
        this.employeeName = employeeName;
        this.uniqueID = uniqueID;
        this.email = email;
        this.role = role;
      }

    }

//   const employee = new Employee(response.employeeName, response.uniqueID, response.email);

module.exports = Employee;