/*GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README*/

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generatePage = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your GitHub username?',
        default: 'jamesbelk0',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
            }
        },
    },
    {
        type: 'input',
        name: 'github repo',
        message: 'What is the name of the GitHub Repo?',
        default: 'README-Generator',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log('A valid GitHub repo is required for your badge!');
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'project title',
        message: 'What is your projects title?',
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log('A valid project title is required.');
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description for the project',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log('Please provide a description for the project');
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'If needed, please describe what needs to be installed for the project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide ample instructions and examples of your project in use'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide guidelines on how other devs can contribute'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Pick a license for your project if used, or choose MIT',
        choices: ['MIT', 'Apache License 2.0', 'GNU LGP', 'Mozilla Public License 2.0', 'ISC']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile('README.md', generatePage({ ...answers }))
    })
}

// Function call to initialize app
init();
