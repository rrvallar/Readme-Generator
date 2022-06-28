// TODO: Include packages needed for this application
var inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "projectDescription",
    message: "What is your project description?",
  },
  {
    type: "input",
    name: "tableOfContent",
    message: "What is your tableOfContent?",
  },
  {
    type: "input",
    name: "Installation",
    message: "What is the Installation?",
  },
  {
    type: "input",
    name: "projectUsage",
    message: "What is the Usage?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((a) => {
    console.log(a);
    // console.log("title is " + a.projectTitle);
  });
}

// Function call to initialize app
init();
