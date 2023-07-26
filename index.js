// TODO: Include packages needed for this application
const fs = require('fs');

const { prompt } = require('inquirer');
// add a package that would import generate file
// export 'require' from a file const bad math = require('./badmath.js');
// node.js will be executed

const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: 'What is the title of the project',
        name: 'title',
    },
    {
        type: "input",
        message: 'Describe the project',
        name: 'description',
    },
    {
        type: "input",
        message: 'Describe how to install the app',
        name: 'install',
    },
    {
        type: "input",
        message: 'Describe how to use the app',
        name: 'use',
    },
    {
        type: "list",
        message: 'Which license do you want?',
        name: 'license',
        choices: ['MIT', 'Apache', 'GNU GPL v3', 'none']
    },
    {
        type: "input",
        message: 'Who contributed to this project? (Optional)',
        name: 'contributing',
    },
    {
        type: "input",
        message: 'Explain how to test the app (Optional)',
        name: 'test',
    },
    {
        type: "input",
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: "input",
        message: 'What is your Github username?',
        name: 'username',
    },
    // title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

];


// TODO: Create a function to initialize app
function init() {
    // this is where we need to ask the user the questions to be filled in for the README
    prompt(questions)
        .then((answers) => {
            console.log(answers)
            let markDown = generateMarkdown(answers)

            fs.writeFile('README.md', markDown, (err) =>
                err ? console.error(err) : console.log('Success!')
            );
            // call writeToFile
        }).catch((error) => {
            console.log(error)
        });
}

// TODO: Create a function to write README file

// Function call to initialize app
init();

