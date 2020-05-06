// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");


class Intern extends Employee {
    constructor(employeeName, uniqueID, email, school) {
        super(employeeName, uniqueID, email, "Intern")
        this.school = school;
    }
}

module.exports = Intern;