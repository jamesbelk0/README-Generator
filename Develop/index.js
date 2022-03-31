// pathways and required packages
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generatePage = require('./utils/generateMarkdown');
const contribute = '';
// An array of questions to push into gernerateMarkdown
const questions = [
    {
        type: 'input',
        name: 'repo',
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
        name: 'projectTitle',
        message: 'What is your projects title?',
        default: 'README.me Generator with Node.js',
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
        default: 'A professional README.md file for a user repository. It is made through user input via node.js',
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
        default: 'npm init, inquirer, path and fs',
        message: 'If needed, please describe what needs to be installed for the project'
    },
    {
        type: 'input',
        name: 'usage',
        default: 'Run "node index.js" and answer the prompts to generate a README file with the info provided!',
        message: 'Please provide ample instructions and examples of your project in use'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Pick a license for your project if used, or choose MIT',
        choices: ['ISC', 'MIT', 'Apache License 2.0', 'GNU LGP', 'Mozilla Public License 2.0', '']
    },
    {
        type: 'input',
        name: 'contributor',
        default: 'James Belk'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide guidelines on how other devs can contribute'
    },
    {
        type: 'input',
        name: 'test',
        default: 'No tests were done or are included.',
        message: 'Were there any tests done?'
    },
    {
        type: 'input',
        name: 'questions',
        default: 'Please reach out if you have any issues via email or on GitHub',
        message: 'What is there is an issue that needs to be fixed?'
    },
    {
        type: 'input',
        name: 'username',
        default: 'jamesbelk0',
        message: 'Please enter your GitHub username'
    },
    {
        type: 'input',
        name: 'email',
        default: 'jamesbelk0@gmail.com',
        message: 'Please enter your email address'
    }
];

// Function to write the README.md file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// Function to initialize the call
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile('README.md', generatePage({ ...answers }))
    })
}

// Function call to initialize app
init();
