const fs = require('fs');
const inquirer = require('inquirer');

console.log("Program started...");

// inquirer.prompt([
//     {
//         type: "input",
//         message: "Enter team member name",
//         name: "membername"
//     }
// ])
// .then(data => console.log(data))

const manager = [
    {
        type: "input",
        message: "Enter manager's full name",
        name: "Manager-name"
    },
    {
        type: "input",
        message: "Enter manager's ID number",
        name: "Manager-ID"
    },
    {
        type: "input",
        message: "Enter manager's email address",
        name: "Manager-email"
    },
    {
        type: "input",
        message: "Enter manager's office number",
        name: "Manager-office"
    }
];

const engineer = [
    {
        type: "input",
        message: "Enter engineer's full name",
        name: "Engineer-name",
    },
    {
        type: "input",
        message: "Enter engineer's ID number",
        name: "Engineer-ID",
    },
    {
        type: "input",
        message: "Enter engineer's email address",
        name: "Engineer-email",
    },
    {
        type: "input",
        message: "Enter engineer's Github username",
        name: "Engineer-github",
    }
]

const intern = [
    {
        type: "input",
        message: "Enter intern's full name",
        name: "Intern-name",
    },
    {
        type: "input",
        message: "Enter intern's ID number",
        name: "Intern-ID",
    },
    {
        type: "input",
        message: "Enter intern's email address",
        name: "Intern-email",
    },
    {
        type: "input",
        message: "Enter intern's University name",
        name: "Intern-school",
    }
]