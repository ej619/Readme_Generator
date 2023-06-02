// TODO: Include packages needed for this application
const inquire = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const renderLicenseBadge = require('./utils/generateMarkdown');
const renderLicenseSection = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message: 'What is the title of your project',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide inctructions and examples for use',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Select License',
        name: 'license',
        choices: ["MIT", "APACHE 2.0","GPL 3.0", "NONE" ]
    },
    {
        type: 'input',
        message: 'Contributing',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Enter test examples',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter your gitHub username',
        name: 'github',
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    
    const newData = generateMarkdown(data) 
    fs.writeFileSync('README.md', newData)
    console.log('README file generated!');
};

// TODO: Create a function to initialize app
async function init() {
    await inquire.prompt(questions).then((answers) =>
    writeToFile(answers)
    );
};

// Function call to initialize app
init();

