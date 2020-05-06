const Employee = require("./lib/Employee"); //added this? 
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

function questionairre() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the employee's name?",
            name: "name"
        },
        {
            type: "email",
            message: "What is their email?",
            name: "email"
        },
        {
            type: "id",
            message: "What is their unique ID?",
            name: "id"
        },
        {
            type: "list",
            message: "What is their role?",
            name: "role",
            choices: [
                "Intern",
                "Engineer",
                "Manager",
            ]
        },
        {
            when: function (response) {
                return (response.role === "Intern");
            },
            type: "input",
            message: "What school do they attend?",
            name: "school"
        },
        {
            when: function (response) {
                return (response.role === "Engineer");
            },
            type: "input",
            message: "What is their GitHub?",
            name: "github"
        },
        {
            when: function (response) {
                return (response.role === "Manager");
            },
            type: "input",
            message: "What is their office number?",
            name: "officeNumber"
        },

    ], function (response) { })
        .then(function (response) {
        switch(response.role) {
            case "Intern":
                const intern = new Intern(response.name, response.id, response.email, response.school)
                console.log("intern: " + intern.school);
            case "Engineer":
            const engineer = new Engineer(response.name, response.id, response.email, response.github)
            console.log("engineer: " + engineer.github);
            case "Manager":
                const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
                console.log("manager: " + manager.officeNumber);
        }
        askAgain();
        });
}
        function askAgain() {
            inquirer
                .prompt([
                    {
                        type: "list",
                        message: "Do you have more employees to add?",
                        name: "addMoreEmployees",
                        choices: [
                            "Yes",
                            "No"
                        ]
                    }])
                .then(function (response) {
                    if (response.addMoreEmployees === "Yes") {
                        questionairre();
                    }

                });
        }




questionairre();













// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
