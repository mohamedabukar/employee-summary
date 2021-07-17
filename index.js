const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");
const fs = require('fs');

const managerQuestions = [
    {
        type: "input",
        message: "What is your name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is your employee id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber"
    }
]


inquirer
    .prompt(managerQuestions)
    .then(managerResponse => {

        const manager = new Manager(managerResponse.name, managerResponse.id, managerResponse.email, managerResponse.officeNumber);
        console.log(manager);
        options();
    })
const engineerQuestions = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name",
                name: "name"
            },
            {
                type: "input",
                message: "What is your employee id?",
                name: "id"
            },
            {
                type: "input",
                message: "What is your email?",
                name: "email"
            },
            {
                type: "input",
                message: "What is your github username?",
                name: "github"
            }

        ])
        .then(engineerResponse => {
            const engineer = new Engineer(engineerResponse.name, engineerResponse.id, engineerResponse.email, engineerResponse.github);
            console.log(engineer);
            options();
        })
}
const internQuestions = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name",
                name: "name"
            },
            {
                type: "input",
                message: "What is your employee id?",
                name: "id"
            },
            {
                type: "input",
                message: "What is your email?",
                name: "email"
            },

        ])
        .then(internResponse =>{
            const intern = new Intern(internResponse.name, internResponse.id, internResponse.email, internResponse.school);
            console.log(intern);
            options();
        })
}

const writeToFile = (managerResponse) => {
    var writeFile=
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="employee.css">
    <title>Employee Summary</title>
</head>
<body>
    <h1 class="header">My team</h1>
    <section class="employees">
        <div class="manager">
            <p>${managerResponse.name}<p>
            <p>${managerResponse.id}<p>
            <p>${managerResponse.email}<p>
            <p>${managerResponse.officeNumber}<p>
        </div>
`;
        fs.writeFile(writeFile, (err) => {
            if (err) throw err;
            console.log("Saved.");
        })
    }



const options = () => {
    inquirer
        .prompt([
            {
                type: "list",
                message: "What do you want to do next?",
                choices: ["Add an engineer", "Add an intern", "Finish building my team"],
                name: "answer"
            }
        ])
        .then(choice => {
            // console.log(choice);
            switch (choice.answer) {
                case "Add an engineer":
                    engineerQuestions();
                    break;
                case "Add an intern":
                    internQuestions();
                    break;
                case "Finish building my team":
                    writeToFile("employee.HTML", writeFile);
                    break;
                default: console.log("???");
            }

        })
}


