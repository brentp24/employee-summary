// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(employeeName, uniqueID, email, officeNumber) {
        super(employeeName, uniqueID, email, "Manager")
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager;




