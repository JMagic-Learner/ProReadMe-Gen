// TODO: Include packages needed for this application
// Step 1 Terminal npm i inquirer
const fs = require("fs");
const inquirer = require("inquirer");
let count = 0;

// TODO: Create an array of questions for user input

const questions = [
    "Enter your name",
    "Enter your project title",
    "Enter Motivation",
    "What does this project do?",
    "What is your coding process?",
    "Enter the # of steps?",
    "Describe the usage of this application",
    "How to test?",
    "List contributors",
    "Select Licenses",
    "Type your email",
    "Type your Github Username"

];

const steps = [
    "Enter your step"
];


const results=[];


async function repeatPrompt(response) {
   
    while (count < response.installation){
    await inquirer.prompt([
        
        {
            type: 'input',
            message: steps[0],
            name: 'step',
        }
    ])
    count++
    results.push(String(response.step));
    
}

    console.log("FSreadme has started")
    console.log(results)
 
    writeToFile()  

   
    return response.step
}


function startPrompt() {
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
            message: questions[2],
            name: 'motivation',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'resolve',
        },
        {
            type: 'input',
            message: questions[4],
            name: 'process',
        },
        {
            type: 'input',
            message: questions[5],
            name: 'installation',
            
        },
        {
            type: 'input',
            message: questions[6],
            name: 'usage',
        },
       
        {
            type: 'input',
            message: questions[7],
            name: 'contributor',
        },
        {
            type: 'input',
            message: questions[8],
            name: 'testing',
        },
        
        {
            type: 'input',
            message: questions[10],
            name: 'email',
        },
        {
            type: 'input',
            message: questions[11],
            name: 'GitHubUser',
        },
        {
            type: 'list',
            message: questions[9],
            name: 'license',
            choices: [
                '![NPM](https://img.shields.io/npm/l/inquirer)',
               
                '![Hex.pm](https://img.shields.io/hexpm/l/plug)',
                '![APM](https://img.shields.io/apm/l/vim-mode)'
            ],
        }, 
    ])


.then((response) => {
repeatPrompt(response)

});

}


    
 // TODO: Create a function to write README file
//function writeToFile('README.md',    


function writeToFile(response, results) {
   
        fs.writeFile('README.md', 
          
              `
          ## ${response.title}
              ${response.license}
          [LIVE DEPLOY](https://${response.GitHubUser}.github.io/${response.title})
          ## Description
                      Hello, my name is ${response.name}. This application is called ${response.title}.
              
              
              Personal Motivation:
              ${response.motivation}
              
              Project Goal / Purpose
              ${response.resolve}
              
              Coding Process
              ${response.process}
              
           ## Table of Contents 
              If your README is long, add a table of contents to make it easy for users to find what they need.
              - [Installation](##-Installation)
              - [Usage](##-Usage)
              - [Credits](##-Credits)
              - [License](##-license)
              - [Contribution](##-contribution)
              - [Test](##-test)
              - [Question](##-question)
              
          ## Installation
              
          
              ${response.step}
             
             
                     
          ## Usage
              
              ${response.usage}
              
                         
          ## Credits
              ${response.contributor}
          
          ## License
              
               ${response.licenses}
                      
                      
          ## Contribution
              ${response.contributor}
              
          ## Tests
              ${response.testing}
              
          ## Questions
              Github Username: ${response.GitHubUser}
              Github Profile: 
          [${response.GitHubUser}](https://github.com/${response.GitHubUser})
              
              If you have any questions, please contact me via email at the following email address;
              ${response.email}
                   `
                   
                
          
              , (err) =>
                  err ? console.error(err) : console.log('Success!'))  
                
                
}

    





 
// TODO: Create a function to initialize app
function init() {}
startPrompt();


// Function call to initialize app
init();


