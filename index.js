const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");
const fs = require('fs');

let responses = [];
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
        responses.push(manager);
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
            responses.push(engineer);
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
            {
                type: "input",
                message: "Which school did you go to?",
                name: "school"
            }

        ])
        .then(internResponse => {
            const intern = new Intern(internResponse.name, internResponse.id, internResponse.email, internResponse.school);
            responses.push(intern);
            console.log(intern);
            options();
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
                    writeToFile();
                    break;
                default: console.log("???");
            }

        })
}
var htmlTeam = []
function writeToFile() {
    //console.log(responses)
    //$(".managerName").text(responses.manager.name);
    for(let i = 0; i < responses.length; i++){
        console.log(responses[i])
        console.log("Role:" +  responses[i].getRole())
        //if role =  engineer, then create a var html block of code for engineer
        if(responses[i].getRole() === "Engineer"){
            let engineerCode = 
            `
        <div class="engineer col-4">
            <h2>Engineer<h2>
            <p class="engineerName">Name: ${responses[i].getname()}</p>
            <p class="engineerId">Id: ${responses[i].getId()}</p>
            <p class= "engineerEmail">Email: ${responses[i].getEmail()}</p>
            <p class= "engineerGithub">Github: ${responses[i].getGithub()}</p>
        </div>
            `
            htmlTeam.push(engineerCode)
        }
        //push it to htmlTeam
        //if role =  intern, then create a var html block of code for intern
        if(responses[i].getRole() === "Intern"){
            let internCode = 
            `
        <div class="intern col-4">
            <h2>Intern<h2>
            <p class="internName">Name: ${responses[i].getname()}</p>
            <p class="internId">Id: ${responses[i].getId()}</p>
            <p class= "internEmail">Email: ${responses[i].getEmail()}</p>
            <p class= "internSchool">School: ${responses[i].getSchool()}</p>
        </div>
            `
            htmlTeam.push(internCode)
        }
        //if role =  manager, then create a var html block of code for manager
        if(responses[i].getRole() === "Manager"){
            let managerCode = 
            `
        <div class="manager col-4">
            <h2>Manager<h2>
            <p class="managerName">Name: ${responses[i].getname()}</p>
            <p class="managerId">Id: ${responses[i].getId()}</p>
            <p class= "managerEmail">Email: ${responses[i].getEmail()}</p>
            <p class= "managerOffice">Office: ${responses[i].getOfficeNumber()}</p>
        </div>
            `
            htmlTeam.push(managerCode)
        }

        
       
        
    }
    const joinedHtml = htmlTeam.join("");
    console.log(htmlTeam.join("")) ;
    const html = 
    `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" >
    <link rel="stylesheet" href="employee.css">
    <title>Employee Summary</title>
</head>
<body>
    <section class= "row">
        ${joinedHtml}
    </section>
</body>
</html>
    `
    fs.writeFile("dist/employee.html", html, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });;
}


