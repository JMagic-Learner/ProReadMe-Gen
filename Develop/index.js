// TODO: Include packages needed for this application
// Step 1 Terminal npm i inquirer
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input

const questions = [
    "Enter your name",
    "Enter your project title",
    "What was your motivation?",
    "What problem does this application resolve?",
    "What is your process for building this application?",
    "Describe the steps needed to install this application",
    "Describe the usage of this application",
    "How do you test this application",
    "Who are the contributors to this project",
    "What other licenses are you using in this application?"

];

inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'name',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'motivation',
        },
        {
            type: 'input',
            message: questions[4],
            name: 'resolve',
        },
        {
            type: 'input',
            message: questions[5],
            name: 'process',
        },
        {
            type: 'input',
            message: questions[6],
            name: 'installation',
            
        },
        {
            type: 'input',
            message: questions[7],
            name: 'usage',
        },
        {
            type: 'list',
            message: questions[9],
            name: 'licenses',
            choices: [
                'npm',
                'https://img.shields.io/badge/<HRUK>-<TESTBADGE>-<GREEN>',
                'jquery',
            ],
        }
    ])
    .then((response) => 

    fs.writeFile('README.md', 
        `# ${response.title}

        ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

        ## Description
        Hello, my name is ${response.name}. This application is called ${response.title}.
      
       ${response.motivation}

       ${response.resolve}

       ${response.process}

        ## Table of Contents 
        If your README is long, add a table of contents to make it easy for users to find what they need.
        - [Installation]
        - [Usage]
        - [Credits]
        - [License]
        ## Installation

       ${response.installation}

        ## Usage

        ${response.usage}

        Provide instructions and examples for use. Include screenshots as needed.
        To add a screenshot, create an  folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
           
        ## Credits
        List your collaborators, if any, with links to their GitHub profiles.
        If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
        If you followed tutorials, include links to those here as well.
        ## License

        ${response.licenses}
        The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
        ---
       
     `
     
            , (err) =>
                err ? console.error(err) : console.log('Success!'))

    );

    

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {
    function write() {
    fs.writeFile('README.md', 
        `# ${response.title}
        ## Description
        Hello, my name is ${response.name}. This application is called ${response.title}.
      
       ${response.motivation}

       ${response.resolve}

       ${response.process}

        ## Table of Contents 
        If your README is long, add a table of contents to make it easy for users to find what they need.
        - [Installation]
        - [Usage]
        - [Credits]
        - [License]
        ## Installation

       ${response.installation}

        ## Usage

        ${response.usage}

        Provide instructions and examples for use. Include screenshots as needed.
        To add a screenshot, create an  folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
           
        ## Credits
        List your collaborators, if any, with links to their GitHub profiles.
        If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
        If you followed tutorials, include links to those here as well.
        ## License

        ${response.licenses}
        The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
        ---
        
        ## Contributing

        ## Tests

        ## Questions
     `
    )
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


