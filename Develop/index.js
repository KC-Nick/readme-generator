// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//generate function
const generateREADME = ({ title, description, installation, usage, credits, contributing, tests, license }) => {
    return `#${title}

    ##Description

    ${description}

    ##Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [Contribute](#contribute)
    - [Test](#test)
    - [License](#license)

    ##Installation

    ${installation}

    ##Usage

    ${usage}

    ##Credits

    ${credits}

    ##Contribute

    ${contributing}

    ##Test
    
    ${tests}
    
    ##License
    
    ${license}`
}
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the title of your project?",
            name: 'title',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid project title is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: "Write a description of your project.",
            name: 'description',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid project description is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: "Describe the steps required to install your project for the Installation section.",
            name: 'installation'
        },
        {
            type: 'input',
            message: "Provide instructions and examples of your project in use for the Usage section.",
            name: 'usage'
        },
        {
            type: 'input',
            message: "Is there anything or anyone you would like to give credit to?",
            name: 'credits'
        },
        {
            type: 'input',
            message: "Provide guidelines on how other developers can contribute to your project.",
            name: 'contributing'
        },
        {
            type: 'input',
            message: "Provide any tests written for your application and provide examples on how to run them.",
            name: 'tests'
        },
        {
            type: 'list',
            message: "Choose a license for your project.",
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
            name: 'license'
        }
    ])
};

// TODO: Create a function to write README file
const readmePageContent = generateREADME(answers);
function writeToFile() {
    fs.writeFile('README.md', readmePageContent, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Success!")
    });
}

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
      .then((answers) => writeToFile('README.md', generateHTML(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
