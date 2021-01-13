const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

// array of questions for user
const questions = [
    { 
        type: 'input',
        message: 'What is the title of your README?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Write a brief description of your project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Installation instructions:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Usage Instructions:',
        name: 'usage'
    },
    {
        type: 'list',
        choices: ["BSD", "MIT", "GPL"],
        name: 'License'
    },
    {
        type: 'input',
        message: 'List your contributors:',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'List your tests:',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Provide the URL for your deployed application:',
        name: 'URL'
    },
    {
        type: 'input',
        message: 'Give a display name for this URL:',
        name: 'URLName'
    },
    {
        type: 'input',
        message: 'Add a screenshot of your application:',
        name: 'photoFile'
    },
    {
        type: 'input',
        message: 'Give Alt Text for your Screenshot:',
        name: 'altText'
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log('File written successfully!')
    )
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        const markdownText = generateMarkdown(answers)
        writeToFile("README.md", markdownText);
    })
    .catch(error => {
        if(error) {
            console.error(error)
        } else {
            console.log('Commit logged!')
        }
    })
}

// function call to initialize program
init();