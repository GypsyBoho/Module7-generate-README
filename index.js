// TODO: Include packages needed for this application

const {defailt:inquirer} = require('inquirer');
// add a package that would import generate file
// export 'require' from a file const bad math = require('./badmath.js');
// node.js will be executed

const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input"
        message: 'What is the title of the project',
        name: 'title',
    },
    {
        type: "input"
        message: 'Describe the project',
        name: 'description',
    },
    {
        type: "input"
        message: 'Describe how to install the app',
        name: 'install',
    },
    {
        type: "input"
        message: 'Describe how to use the app',
        name: 'use',
    },
    {
        type: "input"
        message: 'Which license do you want?',
        name: 'license',
    },
    {
        type: "input"
        message: 'Who contributed to this project? (Optional)',
        name: 'contributing',
    },
    {
        type: "input"
        message: 'Who contributed to this project? (Optional)',
        name: 'contributing',
    },
    {
        type: "input"
        message: 'Explain how to test the app. (Optional)',
        name: 'test',
    },
    {
        type: "input"
        message: 'Have any questions?',
        name: 'questions',
    },
// title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // create the readme
}

// TODO: Create a function to initialize app
function init() {
    // this is where we need to ask the user the questions to be filled in for the README
    // store answers as a variable and create the content for the readme function(generateMarkdown)
    // we need to invoke the generate mark down function (lives in the generateMarkdown.js) and pass the object (key: value pairs) from the index.js file into it
    // call function writeToFile
    console.log("Hello")
}

// Function call to initialize app
init();

/