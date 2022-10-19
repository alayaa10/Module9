// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },{
        type: "input",
        message:"What is the content of this project?",
        name: "description"
    }, {
        type: "confirm",
        message: "Table Of Contents",
        name: "table of contents"
    }, {
        type: "input",
        message: "What does a user need to install to run this app?",
        name: "installation"
    }, {
        type: "Input",
        message: "Please give an explanation on how this app is used.",
        name: "usage"
    }, {
        type: "list",
        message: "What license is being used?",
        name: "license",
        choices: ['MIT', 'Apache','ISC','Mozilla']
    }, {
        type: "input",
        message: "Please name all who contributed to this project.",
        name: "credit"
    }, {
        type: "input",
        message: "What command test are needed for this app?",
        name: "tests"
    }, {
        type: "input",
        message: "Contact information for serious inquiries",
        name: "questions"
    }, {
        type: "input",
        message: "What is your github username?",
        name: "github"
    }, {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    
    })

}

// Function call to initialize app
init();

// exports 
module.exports = questions; 
