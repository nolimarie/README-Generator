const inquirer = require('inquirer');
const fs = require('fs');
const generateMD = require('./utils/generateMD.js');
const path = require('path');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectTitle'
    },
    {
        type: 'input',
        message: "Please enter a brief description of the project.",
        name: 'projectDesc'
    },
    {
        type: 'input',
        message: 'What technologies are needed?',
        name: 'tech'
    },
    {
        type: 'input',
        message: 'How is the app installed?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How do we use the app?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Enter link to demo',
        name: 'demo'
    },
    {
        type: 'list',
        message: 'Choose application licenses',
        name: 'license',
        choices: [
            "None",
            'MIT',
            "ISC",
            "Apache 2.0",
        ]
    },
    {
        type: 'input',
        message: 'List contributors to the project that you would like to mention.',
        name: 'contributing'
    },
    {
        type: 'input',
        message: "What is your Github user name: ",
        name: 'githubUserName'
    },
    {
        type: 'input',
        message: 'What is your email address: ',
        name: 'email'
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);
    var data = generateMD(data);
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('You created a README!')
    })
}

// Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile('README.md', data)
        });
}

// Function call to initialize app
init();