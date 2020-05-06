// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(employeeName, uniqueID, email, gitHub) {
        super(employeeName, uniqueID, email, "Engineer")
        this.gitHub = gitHub;
    }
}

module.exports = Engineer;
